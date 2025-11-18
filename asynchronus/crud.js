const createBtn = document.getElementById('createBtn');
const userId = document.getElementById('userId');
const title = document.getElementById('title');
const desc = document.getElementById('desc');

createBtn.onclick =() => {
    const userIdVal = userId.value, titleVal = title.value, descVal = desc.value;
    if(!userIdVal || !titleVal || !descVal){
        console.log("Invaslid create request !!");
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.setRequestHeader("Content-type", "application/json");

    const reqBody = {
        title,
        body: desc,
        userId
    }
    xhr.send(JSON.stringify(reqBody))
}