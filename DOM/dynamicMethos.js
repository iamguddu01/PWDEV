let parentList = document.getElementById('list');
let newLI = document.createElement('li');
newLI.textContent = "Third";
parentList.appendChild(newLI);
let newLi2 = document.createElement('li');
newLi2.textContent = "new Third";
parentList.replaceChild(newLi2, newLI);
parentList.removeChild(newLi2);