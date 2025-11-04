let boxes = document.getElementsByClassName("box");
for(let eachBox of boxes){
    eachBox.style.background = "red";
}
boxes[0].style.background = "blue";