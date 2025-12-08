// Its a key value paired data structure, it supports dynamic keys and values
// Its support ordering (insertion ordering)
// Iterating on maps is simple
// Example
// {
//     userObj : {
//         token : "abc123",
//         loginTIme : Date.now()
//     }
// }

const userSession = new Map();
let userObj = {
    userId : 123,
    userName : "Govind"
}
let tokenObj = {
    token : "gdkuhf456",
    loginTIme : Date.now()
}
userSession.set(userObj, tokenObj);
console.log(userSession);


const tag = document.getElementById('tag')
const componentState = new Map();
componentState.set(tag, {Disabled : true});
console.log(componentState);