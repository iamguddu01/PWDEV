// Type Guard defined as a function that checks if a value is of a certain type. It is used to narrow down the type of a variable within a conditional block.
function print(value : string | number){
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    return value;
}

function makeApiCall(url : string){
    let response = new Error("Network Error");
    if(response instanceof Error){
        console.error(response.message);
    }else{
        console.log("API call successful");
    }
}
// In operator => checks if a property exists in an object
type dog = {
    bark : () => void;
}
type cat = {
    meow : () => void;
}
function speak(pet : dog | cat){
    if("bark" in pet){
        pet.bark();
    }else{
        pet.meow();
    }
}
speak({bark : () => console.log("Woof!")});
speak({meow : () => console.log("Meow!")});

function process(value:string | string[]){
    if(Array.isArray(value)){
        console.log("Processing array of strings:");
        value.forEach(item => console.log(item));
    }else{
        console.log(value.toUpperCase());
    }
}

function htmlElement(element : HTMLElement | null){
    if(element instanceof HTMLElement){
        console.log("Element is an HTML element");
    }else{
        console.log("Element is null");
    }
}

let user : {
    address?:{
        streetName?: string
    }
} = {};

if(user?.address){
    console.log(user.address.streetName);
}


// type narrowing => TypeScript can narrow down the type of a variable based on control flow analysis. This allows you to safely access properties or call methods specific to a certain type within a conditional block.
let role:"admin" | "user" = "admin";

if(role === "admin"){
    console.log("User has admin privileges");
}else{
    console.log("User is a regular user");
}
