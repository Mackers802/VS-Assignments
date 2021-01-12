

//mouseOver = blue
//holdDown = red
//letGo = yellow 
//doubleClick = green
//scrollUsed = orange


document.getElementById('square').addEventListener('mouseover', changeColor1);

function changeColor1(event){
    event.target.style.backgroundColor = "blue";
    return false;
}

document.getElementById('square').addEventListener('mousedown', changeColor2);

function changeColor2(event){
    event.target.style.backgroundColor = "red";
    return false;
}

document.getElementById('square').addEventListener('mouseup', changeColor3);

function changeColor3(event){
    event.target.style.backgroundColor = "yellow";
    return false;
}

document.getElementById('square').addEventListener('dblclick', changeColor4);

function changeColor4(event){
    event.target.style.backgroundColor = "green";
    return false;
}
document.getElementById('square').addEventListener('scroll', changeColor5);

function changeColor5(event){
    event.target.style.backgroundColor = "orange";
    return false;
}

//keypress =  b(66), r(82), y(89), g(71), o(79)

document.addEventListener("keypress", function(event1) {
    console.log(event1);
  })
  function changeColor6(event1){
    this.style.backgroundColor = "red";
    return false;
}