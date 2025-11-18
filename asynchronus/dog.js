const btn = document.getElementById('btn');
const dogImg = document.getElementById('dogid');

function changeImg (){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
    xhr.onload = () => {
        let url = JSON.parse(xhr.responseText).message;
        dogImg.src = url;
    };
    xhr.send();
}
changeImg();
btn.addEventListener('click', changeImg);