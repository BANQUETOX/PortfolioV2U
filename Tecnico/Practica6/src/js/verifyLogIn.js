const $inputs = document.querySelectorAll("input")

const checkInput = (e)=>{
    let inputId = e.target.id;
    let inputValue = document.getElementById(inputId).value
    
    if (inputValue != ""){
        document.getElementById(inputId +"-badge").style.display = "none";
    }
    else{
        document.getElementById(inputId +"-badge").style.display = "initial";
    }
}

$inputs.forEach(input => {
    input.addEventListener("blur", checkInput)
});