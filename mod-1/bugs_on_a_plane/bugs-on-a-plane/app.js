const form = document.getElementById("airline-form");
form.addEventListener("submit", formAlert);

function formAlert(e){
    e.preventDefault();
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const location = form.travelLocation.value;
    
    let dietChoice = []
    function diet(){
        if (form.getElementsByClassName('vegan').checked){
            dietChoice.push("vegan");
        }
        else if (form.getElementsByClassName('gluten').checked) {
            dietChoice.push('gluten');
        }
        else if (form.getElementsByClassName('paleo').checked) {
            dietChoice.push('paleo');
        }
    }
    alert (`First Name: ${firstName} Last Name: ${lastName} Age: ${age} Gender: ${gender} Travel Location: ${location} Diet: ${dietChoice} ${"Awesome, now if you die, it won't be an accident.."}`)
}