class PopupUi{
    constructor(){
        this.blockListEl = document.getElementById('blocked-website-list');
        this.usageListEl = document.getElementById('usage-list');
        this.pomodoroDisplay = document.getElementById('timer-display');
        this.blockInput = document.getElementById('block-input');
        this.pomoInput = document.getElementById('pomo_inp');
        this.blockToggle = document.getElementById('block-toggle');
        this.pomoInterval = null;
        this.currentEndTime = null;
        this.currentTimeLeft = 0;
    }

    async init(){
        await this.reloadData();
        this.bindEvents();
        this.listenPomodoro();
    }

    async reloadData(){
        const data = await chrome.storage.local.get(["blockedsitekey", "siteusage", "pomodoroTime", "pomodoroEnd", "blockerEnabled"]);
        this.renderBlockList(data.blockedsitekey ?? []);
        this.renderUsage(data.siteusage ?? {});
        if(this.blockToggle){
            this.blockToggle.checked = data.blockerEnabled ?? true;
        }
        this.currentEndTime = data.pomodoroEnd ?? null;
        this.currentTimeLeft = this.calculateTimeLeft(this.currentEndTime, data.pomodoroTime);
        this.startLocalTimer();
    }

    renderBlockList(list){
        this.blockListEl.innerHTML = "";
        if(!list.length){
            const li = document.createElement("li");
            li.textContent = "No blocked sites yet.";
            this.blockListEl.appendChild(li);
            return;
        }

        list.forEach(eItem => {
            const li = document.createElement("li");
            li.textContent = eItem;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Unblock";
            removeBtn.className = "remove-btn";
            removeBtn.onclick = () => this.removeSite(eItem);

            li.appendChild(removeBtn);
            this.blockListEl.appendChild(li);
        });
    }

    renderUsage(usage){
        this.usageListEl.innerHTML ="";
        const entries = Object.entries(usage);
        if(!entries.length){
            const li = document.createElement('li');
            li.textContent = "No usage tracked yet.";
            this.usageListEl.appendChild(li);
            return;
        }
        entries.forEach(([site, seconds]) => {
            const li = document.createElement('li');
            li.textContent = `${site} : ${Math.round(seconds / 60)} mins`;
            this.usageListEl.appendChild(li);
        });
    }
    
    async addBlockSite(){
        const raw = this.blockInput.value.trim();
        if(!raw) return;

        let host = "";
        try{
            host = new URL("https://"+raw.replace(/https?:\/\//, "")).hostname;
        }catch(err){
            alert("Please enter a valid domain (e.g., example.com)");
            return;
        }
        await this.sendMessage("ADD_BLOCK", {site : host});
        this.blockInput.value = "";
        await this.reloadData();
    }

    async removeSite(site){
        await this.sendMessage("REMOVE_BLOCK", {site});
        await this.reloadData();
    }

    async startPomodoro(){
        const minutes = Number(this.pomoInput.value) || 25;
        await this.sendMessage("START_POMODORO", {minutes});
    }

    async startPomodoroQuick(minutes){
        this.pomoInput.value = minutes;
        await this.sendMessage("START_POMODORO", {minutes});
    }

    async stopPomodoro(){
        await this.sendMessage("STOP_POMODORO");
    }

    refreshPomodoro(timeLeft){
        const safeLeft = Math.max(0, Math.floor(timeLeft));
        const mins = Math.floor(safeLeft/60);
        const secs = safeLeft % 60;
        this.pomodoroDisplay.textContent = `Time left: ${mins}:${secs.toString().padStart(2, "0")}`;
    }

    calculateTimeLeft(endTime, storedTime){
        if(endTime){
            const msLeft = endTime - Date.now();
            if(msLeft > 0){
                return Math.max(Math.round(msLeft / 1000), 0);
            }
        }
        return storedTime ?? 0;
    }

    startLocalTimer(){
        if(this.pomoInterval){
            clearInterval(this.pomoInterval);
            this.pomoInterval = null;
        }

        if(!this.currentEndTime && !this.currentTimeLeft){
            this.refreshPomodoro(0);
            return;
        }

        // Initial render
        this.currentTimeLeft = this.calculateTimeLeft(this.currentEndTime, this.currentTimeLeft);
        this.refreshPomodoro(this.currentTimeLeft);

        if(this.currentTimeLeft <= 0){
            return;
        }

        this.pomoInterval = setInterval(() => {
            this.currentTimeLeft = this.calculateTimeLeft(this.currentEndTime, this.currentTimeLeft - 1);
            this.refreshPomodoro(this.currentTimeLeft);

            if(this.currentTimeLeft <= 0){
                clearInterval(this.pomoInterval);
                this.pomoInterval = null;
            }
        }, 1000);
    }

    listenPomodoro(){
        chrome.storage.onChanged.addListener((changes, area) => {
            if(area !== "local") return;
            if(changes.pomodoroTime || changes.pomodoroEnd){
                if(changes.pomodoroEnd){
                    this.currentEndTime = changes.pomodoroEnd.newValue ?? null;
                }
                if(changes.pomodoroTime){
                    this.currentTimeLeft = changes.pomodoroTime.newValue ?? 0;
                }
                this.startLocalTimer();
            }
        });
    }

    bindEvents(){
        document.getElementById('block-add-btn').onclick = () => this.addBlockSite();
        document.getElementById('timer-start').onclick = () => this.startPomodoro();
        document.getElementById('timer-stop').onclick = () => this.stopPomodoro();

        document.querySelectorAll('.chip-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mins = Number(btn.dataset.minutes);
                if(mins){
                    this.startPomodoroQuick(mins);
                }
            });
        });

        if(this.blockToggle){
            this.blockToggle.addEventListener('change', () => {
                const enabled = this.blockToggle.checked;
                console.log("[Popup] Toggling blocker, enabled =", enabled);
                this.sendMessage("SET_BLOCKER_ENABLED", {enabled})
                    .then(() => {
                        chrome.storage.local.set({blockerEnabled : enabled});
                    })
                    .catch((err) => {
                        console.error("Failed to toggle blocker", err);
                    });
            });
        }

        // Enter to add block
        this.blockInput.addEventListener('keydown', (e) => {
            if(e.key === "Enter"){
                e.preventDefault();
                this.addBlockSite();
            }
        });

        // Enter to start pomodoro
        this.pomoInput.addEventListener('keydown', (e) => {
            if(e.key === "Enter"){
                e.preventDefault();
                this.startPomodoro();
            }
        });
    }

    async sendMessage(action, payload = {}){
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({action, ...payload}, (response) => {
                if(chrome.runtime.lastError){
                    reject(chrome.runtime.lastError);
                    return;
                }
                if(response?.success){
                    resolve(response);
                }else{
                    reject(response?.error || "Unknown error");
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const ui = new PopupUi();
    ui.init();
});