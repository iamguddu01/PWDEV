const div = document.getElementById('div');
let count = 1;
function changeFact() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET','https://catfact.ninja/fact');

  xhr.onload = () => {
    div.innerText = `${count++}-${JSON.parse(xhr.responseText).fact}`;
    }
    xhr.send();
}

changeFact();

setInterval(changeFact, 5000);
