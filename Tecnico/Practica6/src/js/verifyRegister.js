const $inputs = document.querySelectorAll("input")
const $form = document.getElementById("form")
const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // AQUI ACEPTARA LETRAS CON O SIN ACENTO Y ESPACIOS
    password: /^.{4,12}$/, // SÓLO ACEPTARA UN MINIMO DE 4 DIGITOS Y UN MÁXIMO DE 12 DIGITOS
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // ACEPTA DE TODO MENOS CARACTERES ESPECIALES
    country: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

const checkInputType = (e)=>{
    let inputId = e.target.id
    let input = e.target
    switch (inputId){
        case "name":
            checkInput(input, inputId, expressions.name)
            break
        case "email":
            checkInput(input, inputId, expressions.email)
            confirmEmail()
            break
        case "confirm-email":
            confirmEmail()
            break
        case "password":
            checkInput(input, inputId, expressions.password)
            confirmPassword()
            break
        case "confirm-password":
            confirmPassword()
            break
        case "country":
             checkInput(input, inputId, expressions.country)
            break   
    }
}

function checkInput(input,inputId,expression ){
    if (expression.test(input.value)){
        document.getElementById(inputId +"-badge").style.display = "none";
    }
    else{
        document.getElementById(inputId +"-badge").style.display = "initial";
    }
}

function confirmPassword(){
    let password = document.getElementById("password")
    let confirmPassword = document.getElementById("confirm-password")

    if (password.value !== confirmPassword.value){
        document.getElementById("confirm-password-badge").style.display = "initial";
    }
    else{
        document.getElementById("confirm-password-badge").style.display = "none";
    }

}

function confirmEmail(){
    let email = document.getElementById("email")
    let confirmEmail = document.getElementById("confirm-email")
    if (email.value !== confirmEmail.value){
        document.getElementById("confirm-email-badge").style.display = "initial";
    }
    else{
        document.getElementById("confirm-email-badge").style.display = "none";
    }

}


$inputs.forEach(input => {
    input.addEventListener("blur",checkInputType)
    input.addEventListener("keyup", checkInputType)
    
});

$form.addEventListener("submit", (e)=>{
    e.preventDefault()
})