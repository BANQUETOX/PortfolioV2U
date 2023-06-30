let inputElements = []
let elements = []
let form = document.getElementById("form")
function addElement(){
    let input = document.getElementById("element").value
    let radioStar = document.getElementById("position-start")
    let radioEnd = document.getElementById("position-final")
    let newElement = document.createElement("li")
    newElement.innerHTML = input;

    if (radioStar.checked){
        inputElements.unshift(input)
        elements.unshift(newElement)
    }
    else if (radioEnd.checked){
        inputElements.push(input)
        elements.push(newElement)
    }
    
    elements.forEach(element => {
        document.getElementById("elementList").appendChild(element)
    });
    console.log(inputElements)
}



function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


console.log(inputElements)

