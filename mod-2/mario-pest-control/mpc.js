const form = document.getElementById("marioPestControlForm")

form.addEventListener("submit", function(e){
    e.preventDefault()
    
    const goombasNumber = form.goombasCount.value * 5
    form.goombasCount.value = ""
    const bobombsNumber = form.bobombsCount.value * 7
    form.bobombsCount.value = ""
    const cheepNumber = form.cheepCount.value * 11
    form.cheepCount.value = ""
    
    const totalNumber = goombasNumber + bobombsNumber + cheepNumber

    const coins = document.createElement("div")
    coins.textContent = "Total Coins Owed: " + totalNumber
    totalCost.append(coins)
    console.log(coins)
});