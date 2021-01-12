

document.getElementByID("airline-form");
document.getElementByID("submit").addEventListener("click", submit);

function formAlert() {
    let form = document.getElementById("airline-form")
    form.getElementByClassName("first-name").value;
    form.getElementByClassName("last-name").value;
    form.getElementsByClassName("age").value;
    form.getElementsByClassName("gender").value;
    form.getElementsByClassName["travel-location"].value;

    let dietChoice = []
function diet(){
    if (form.getElementsByClassName('vegan').checked){
        dietChoice.push("vegan").value;
    }
    else if (form.getElementsByClassName('gluten').checked) {
        dietChoice.push('gluten').value;
    }
    else if (form.getElementsByClassName('paleo').checked) {
        dietChoice.push('paleo').value;
    }

}
    

 }
  alert (`First Name: ${firstName} Last Name: ${lastName} Age: ${age} Gender: ${gender} Travel Location: ${location} Diet: ${dietChoice} ${"Awesome, now if you die, it won't be an accident.."}
