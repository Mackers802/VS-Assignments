/*Qualifier*/
const newH1 = document.getElementById("header")
newH1.innerHTML = '<h1>JavaScript made this!!</h1>'

var name = "Mack Yandow"
const span = document.createElement("span")
span.textContent = name
newH1.appendChild(span)
span.style.color = "orange" 

const h2 = document.createElement("span")
h2.textContent = " Wrote the JavaScript"
newH1.appendChild(h2)

/*bronze*/
var msg = document.getElementsByClassName("messages")[0].children
function bronze(){
msg[0].innerHTML = "Hello I need to talk to you";
msg[1].innerHTML = "I need you to watch for the cow thiefs stealing my livestock";
msg[2].innerHTML = "I can do that";
msg[3].innerHTML = "Thank you!";


let btnClear = document.getElementById("clear-button");

btnClear.addEventListener('click', (messages) => {
    [...msg].forEach(messages => messages.textContent = '');
})
}

bronze()