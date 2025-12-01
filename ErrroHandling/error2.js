async function loadProfile(userId) {
    try{
        const res = await fetch(`api/users/${userId}`);
        return res;
    }catch(error){
        console.log("Something went wrong form 1 func");
    }
}

function divide(a,b){
    if(b === 0)
        throw new Error("Number cannot be divided by 0") // Throwing error manually 
    return a/b;
}
try{
    console.log(divide(2,0));
}catch(error){
    console.log("Something Went wrong");
}finally{
    console.log("Code is completed However and I am last final block and i will execute everytime!!");
}