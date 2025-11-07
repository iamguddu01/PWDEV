const input = document.getElementById("name");
// input.addEventListener('keypress', (event) =>{
//     console.log("Key Pressed :", event.key+ " : " + event.keyCode) ;
// });


input.addEventListener('keydown', () => {
    console.log("Key down event");
})
input.addEventListener('keypress', () => {
    console.log("Key Pressed");
})
input.addEventListener('keyup', () => {
    console.log("Key up event");
})
input.addEventListener('click', () => {
    console.log("Key clicked event");
})

let div = document.getElementById("div");
div.addEventListener('keydown', () => {
    console.log("Keydown event fired on div");
});

let btn = document.getElementById("btn");
function sayHi () {
    console.log("Hii There");
}
btn.addEventListener('click', sayHi);


// Removing Event listener

 setTimeout(() => {
    input.removeEventListener('keydown', () => {
        console.log("Event removed");
    })
 },5000);  // 1 second = 1000 milisecond  event removed after 5 second
 