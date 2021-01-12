// 
// Requirements:
// Each section will have a button to perform the operation
// You will inject the result into the HTML (not an alert)
// 


const form = document.getElementById("this-is-my-form")
// console.log(document)
form.addButton.addEventListener("click", function(e){
    e.preventDefault()

    const firstNumber = form.firstNumber.value
    form.firstNumber.value = ""
    const secondNumber = form.secondNumber.value
    form.secondNumber.value = ""

    const h1 = document.createElement("div")
    h1.textContent = parseInt(firstNumber) + parseInt(secondNumber)
    container1.append(h1)
    // console.log(container1)
});
    
    
    
    form.subtractButton.addEventListener("click", function(e){
        e.preventDefault()

        const thirdNumber = form.thirdNumber.value
        form.thirdNumber.value = ""
        const forthNumber = form.forthNumber.value
        form.forthNumber.value = ""

        const h2 = document.createElement("div")
        h2.textContent = parseInt(thirdNumber) - parseInt(forthNumber)
        container2.append(h2)
    });
    
    
    
    form.multiplyButton.addEventListener("click", function(e){
        e.preventDefault()

        const fifthNumber = form.fifthNumber.value
        form.fifthNumber.value = ""
        const sixthNumber = form.sixthNumber.value
        form.sixthNumber.value = ""

        const h3 = document.createElement("div")
        h3.textContent = parseInt(fifthNumber) * parseInt(sixthNumber)
        container3.append(h3)
    });