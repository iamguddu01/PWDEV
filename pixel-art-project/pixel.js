const gridContainer = document.getElementById('grid-container');
const colorPicker = document.getElementById('color-picker');
const clearBtn = document.getElementById('clear-btn');
const gridSizeInp = document.getElementById('grid-size-input');
const resizeBtn = document.getElementById('resize-btn');

let gridsize = 32; // Initial size of grid when page load first
let isDrawing = false;

function createGrid(size) {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 15px)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 15px)`;

  // Creating grid dynamically according to input size
  for (let i = 0; i < size*size; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    gridContainer.appendChild(pixel);
    pixel.addEventListener('mousedown', startDraw);
    pixel.addEventListener('mouseup', stopDraw);
    pixel.addEventListener('mouseover', draw);
  }
}

function startDraw(event) {
  isDrawing = true;
  draw(event);
}

function draw(event) {
  if (isDrawing && event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = colorPicker.value;
  }
}

function stopDraw() {
  isDrawing = false;
}

clearBtn.addEventListener('click', () => {
  document.querySelectorAll('.pixel').forEach(eachPixel => {
    eachPixel.style.backgroundColor = 'transparent';
  });
});

resizeBtn.addEventListener('click', () => {
  const newSize = parseInt(gridSizeInp.value);
  if(newSize && newSize > 0 && newSize <= 60){
    gridsize = newSize;
    createGrid(gridsize);
  }else{
    alert("Please enter value between 1 to 60"); 
  }
})

// Stop drawing if mouse is released anywhere on the document
// document.addEventListener('mouseup', stopDraw);

// Initialize grid with default size
createGrid(gridsize);
