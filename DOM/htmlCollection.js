// Inserting new element in ul list
let lis = document.getElementsByName('li');
console.log(lis.length);
let ul = document.getElementById('list');    
let newLi = document.createElement('li');   // Creating new element li 
newLi.textContent = "three";      // Inserting text in new element li stored in newLi variable
ul.appendChild(newLi);    // Adding newLi element in ul list stored in variable ul\


// All changes are dynamic and real time and visible

