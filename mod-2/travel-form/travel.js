const form = document.getElementById("myForm");
form.addEventListener("submit", formAlert);

function formAlert(e){
    e.preventDefault();
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const places = form.places.value;

    const checkedInputs = []
    for(let i = 0; i < form.alergies.length; i++){
            if(form.alergies[i].checked){
                checkedInputs.push(form.alergies[i].value)
            }
        }

    const alergies = checkedInputs



alert (`    First Name: ${firstName} 
    Last Name: ${lastName} 
    Age: ${age} 
    Gender: ${gender} 
    Places to go ${places} 
    Alergies: ${alergies }`)}