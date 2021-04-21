const buttonLoad = document.querySelector(".load")
const buttonSave = document.querySelector(".save")

console.log(buttonLoad)
console.log(buttonSave)


function showDetails(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert("The " + animal.innerHTML + " is a " + animalType + ".");}