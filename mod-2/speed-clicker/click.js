
document.getElementById("thisIsTheBody")
let count = 0;
document.addEventListener("click", function(e){
    e.preventDefault();
    
    var button = document.getElementById("clickButton");
    button.onclick = function (){
        count++;
        localStorage.setItem("count", count)
    }
    displayCountElement.textContent = "Your count is: "
    countToDisplay.append(displayCountElement)
    displayCountElement.append(count)
});
const displayCountElement = document.createElement("p")
