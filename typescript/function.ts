function greet(name:string){
    return `Hello ${name}`
}
console.log(greet("Govind"))

function add(a:number, b:number):number{
    return a + b
}
console.log(add(4,8))

function sayHello():void{
    console.log("Hello")
}
let arr:number[]= [1,2,3,4,5];
let sArr:string[] = ['a', 'b', 'c', 'd']


let gender:number | string = "male"
let array : (number | string)[] = [1,23,'gh']

let returnLiterals: "success" | "failure" = "success" // Only "success" | "failure" can be used not other any word

let user:{
    name:string,
    age:number | string
} = {
    name : "Govidn",
    age : 23
}

type newuser = {
    name:string;
    gender:string;
    age:number;
    role:string;
} 

let govindObj : newuser = {
    name:"Govind",
    gender:"male",
    age:20,
    role:"Developer"
}

type apiResponse = {
    status : "success" | "Faliure",
    data : any
}

function registerUser(user:{name:string, age:number}):void{ // define in params or create varible and use here will be fine also 
    console.log(`User ${user.name} with ${user.age} registered successfully`)
}
registerUser({name:"GOVIND", age:21})

let numArr : number[] = [1,2,3,4];
// numArr.push("gh")    unvalid

 
