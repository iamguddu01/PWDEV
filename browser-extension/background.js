// Storage service (For storage needs)
class StorageService{
    // store
    static async save(key, value){
        await chrome.storage.local.set({[key] : value}) // It's a extension so can't use normal getitem setitem
    }
    // load
    static async load(key, defaultValue = null){
        const data = await chrome.storage.local.get([key]);
        return data[key] ?? defaultValue ;
    }
}

// Features


// site blocker
const localStorageKeys = {
    Site_Usage : "siteusage",
    Blocked_site : "blockedsitekey",
    Blocker_Enabled : "blockerEnabled"
}
class SiteBlocker{
    constructor(){
        this.blockList = new Set();
        this.enabled = true;
        this.init();
    }

    async init(){
        const [stored, enabled] = await Promise.all([
            StorageService.load(localStorageKeys.Blocked_site, []),
            StorageService.load(localStorageKeys.Blocker_Enabled, true)
        ]);
        this.blockList = new Set(stored);
        this.enabled = enabled;
        await this.applyBlocking();
    }

    async setEnabled(value){
        console.log("[Blocker] setEnabled called with:", value);
        this.enabled = value;
        await StorageService.save(localStorageKeys.Blocker_Enabled, this.enabled);
        await this.applyBlocking();
    }

    async addSite(url){
        if(!this.blockList.has(url)){
            this.blockList.add(url);
            await StorageService.save(localStorageKeys.Blocked_site, [...this.blockList]);
            await this.applyBlocking();
        }
    }

    async removeSite(url){
        if(this.blockList.has(url)){
            this.blockList.delete(url);
            await StorageService.save(localStorageKeys.Blocked_site, [...this.blockList]);
            await this.applyBlocking();
        }
    }
    isBlocked(url){
        for(let suburl of this.blockList){
            if(url.toLowerCase().includes(suburl.toLowerCase())){
                return true;
            }
        }
        return false;
    }

    async applyBlocking(){
        const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
        const ruleIdToRemove = existingRules.map(rule => rule.id);
        if(ruleIdToRemove.length > 0){
            await chrome.declarativeNetRequest.updateDynamicRules({
                removeRuleIds : ruleIdToRemove
            });
            console.log("[Blocker] Removed", ruleIdToRemove.length, "existing rules");
        }

        if(!this.enabled || this.blockList.size === 0){
            console.log("[Blocker] Blocking disabled or no sites to block. Rules cleared.");
            return;
        }

        const newRules = [...this.blockList].map((site, index) => {
            return {
                id : index + 1,
                priority : 1,
                action : {type : "block"},
                condition : {
                    urlFilter : `*://*.${site}/*`
                }
            }
        });

        await chrome.declarativeNetRequest.updateDynamicRules({
            addRules : newRules
        });
        console.log("[Blocker] Added", newRules.length, "blocking rules for sites:", [...this.blockList]);
    }
}

// usage tracker
class UsageTracker{
    constructor(){
        this.usage = {};
        this.currentHost = null;
        this.interval = null;
        this.init();
    }
    async init(){
        this.usage = await StorageService.load(localStorageKeys.Site_Usage, {});
        // Detect active tabs on browser startup
        chrome.tabs.query({active : true, lastFocusedWindow : true}, (tabs) => {
            if(tabs.length && tabs[0].url){
                this.updateCurrentHost(tabs[0].url);
            }
        });
        // on switch of the tab we need to update host
        chrome.tabs.onActivated.addListener(async (activeInfo) => {
            chrome.tabs.get(activeInfo.tabId, (tab) => {
                this.updateCurrentHost(tab?.url);
            });
        });

        // detect url changes in same tab
        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            if(tab.active && changeInfo.url){
                this.updateCurrentHost(changeInfo.url);
            }
        });
        this.startTimer();
    }


    async updateCurrentHost(url){
        if(!url) return;

        try{
            const host = new URL(url).hostname;
            this.currentHost = host;
        }catch(error){
            this.currentHost = null;
        }
    }

    startTimer(){
        if(this.interval) clearInterval(this.interval);
        this.interval = setInterval(async () => {
            if(this.currentHost){
                const currentTime = this.usage[this.currentHost] ?? 0;
                this.usage[this.currentHost] = currentTime + 1; // 1 Second
                await StorageService.save(localStorageKeys.Site_Usage, this.usage);
            }
        }, 1000);
    }


    // async track(tabsInfo){
    //     chrome.tabs.get(tabsInfo.tabId, async (tab) =>{
    //         if(!tab?.url)
    //             return;
    //         let hostName  = new URL(tab.url).hostname;
    //         let currentTime = this.usage[hostName] ?? 0;
    //         this.usage[hostName] = currentTime + 1;

    //         await StorageService.save(localStorageKeys.Site_Usage, this.usage);
    //     })
    // }
}

// pomodoro manager (timer)
class PomodoroManager {
    constructor(){
        this.timeLeft = 0;
        this.endTime = null;

        chrome.alarms.onAlarm.addListener((alarm) => this.handleAlarm(alarm));
        this.restoreState();
    }

    async restoreState(){
        const {pomodoroEnd} = await chrome.storage.local.get(["pomodoroEnd"]);
        if(pomodoroEnd){
            this.endTime = pomodoroEnd;
            await this.syncTimeLeft();
        }
    }

    async start(minutes = 25){
        const minsNumber = Number(minutes) || 25;
        const isShort = minsNumber < 1;

        this.timeLeft = Math.round(minsNumber * 60);
        this.endTime = Date.now() + this.timeLeft * 1000;

        await chrome.storage.local.set({
            pomodoroTime : this.timeLeft,
            pomodoroEnd : this.endTime
        });

        await chrome.alarms.clear("pomodoro_end");
        await chrome.alarms.clear("pomodoro_tick");

        if(isShort){
            chrome.alarms.create("pomodoro_end", {when : this.endTime});
        }else{
            chrome.alarms.create("pomodoro_end", {delayInMinutes : minsNumber});
        }
        chrome.alarms.create("pomodoro_tick", {periodInMinutes : 1});
    }

    async stop(){
        this.timeLeft = 0;
        this.endTime = null;
        await chrome.alarms.clear("pomodoro_end");
        await chrome.alarms.clear("pomodoro_tick");
        await chrome.storage.local.set({
            pomodoroTime : 0,
            pomodoroEnd : null
        });
    }

    async finish(){
        await this.stop();
        console.log("[Pomodoro] Finished, sending notification");
        chrome.notifications.create({
            type : "basic",
            iconUrl : "assets/icon128.png",
            title : "Pomodoro complete!",
            message : "Take a break!"
        });
    }

    async syncTimeLeft(){
        if(!this.endTime){
            await chrome.storage.local.set({pomodoroTime : 0});
            return;
        }

        const msLeft = this.endTime - Date.now();
        this.timeLeft = Math.max(0, Math.round(msLeft / 1000));
        console.log("[Pomodoro] Sync time left:", this.timeLeft, "s");
        await chrome.storage.local.set({pomodoroTime : this.timeLeft});

        if(this.timeLeft <= 0){
            await this.finish();
        }
    }

    async handleAlarm(alarm){
        console.log("[Pomodoro] Alarm fired:", alarm?.name);
        if(alarm.name === "pomodoro_end"){
            await this.finish();
            return;
        }
        if(alarm.name === "pomodoro_tick"){
            await this.syncTimeLeft();
        }
    }
}


// buisness logic

const usageTracker = new UsageTracker();
const blocker = new SiteBlocker();
const pomodoro = new PomodoroManager();

// lIstening popup msgs

chrome.runtime.onMessage.addListener((msgObj, sender, sendResponse) =>{
    (async () => {
        try{
            console.log("[Background] Message received:", msgObj.action, msgObj);
            switch(msgObj.action){
                case "ADD_BLOCK":
                    await blocker.addSite(msgObj.site);
                    sendResponse({success : true});
                    break;
                case "REMOVE_BLOCK":
                    await blocker.removeSite(msgObj.site);
                    sendResponse({success : true});
                    break;
                case "SET_BLOCKER_ENABLED":
                    await blocker.setEnabled(msgObj.enabled);
                    sendResponse({success : true});
                    break;
                case "START_POMODORO":
                    pomodoro.start(msgObj.minutes);
                    sendResponse({success : true});
                    break;
                case "STOP_POMODORO":
                    pomodoro.stop();
                    sendResponse({success : true});
                    break;
                default:
                    sendResponse({success : false, error : "Unknown action!"})
            }
        }catch(error){
            console.error("Error handling message : ", error);
            sendResponse({success : false, error : error.message});
        }
    })();
    return true;
});
