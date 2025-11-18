// Task 1
console.log("Start");
// Some taks, which takes good amount of time to complete
// can be API/Metwork call, in code data processing, interaction with some package
// Task 2
function longTask(){
    const start = Date.now();
    while(Date.now() - start < 3000){}
    console.log("Task completed");
}
longTask();
// Task 3
console.log("End");
// This process is executing line by line so it is called syncronous programming/ or execution



function longTask(val, timeToWait){
    const start = Date.now();
    while(Date.now() - start < timeToWait){}
    console.log(val);
};
longTask("API called", 1000);
longTask("Database called", 1500);
longTask("Final call called", 2000);
console.log("All taks done");



