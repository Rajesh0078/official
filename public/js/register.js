const form = document.querySelector(".form-control");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const mobile = document.querySelector("#mobile");
const password = document.querySelector("#password")
const cPassword = document.querySelector("#confpass")


function validate(event){
    event.preventDefault();
    const passwordVal = password.value.trim();
    const cpasswordVal = cPassword.value.trim();
    const mobileVal = mobile.value.trim();
    
    
    if(mobileVal.length < 9 || mobileVal.length > 10){
        setErrorMsg(mobile, "mobile number must contains 10 digits")
    }
    else if(passwordVal.length < 3){
        setErrorMsg(password,"Password must contains 3 values")
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cPassword,"Password does not match")
    }
    else{
        form.submit()
    }
}

function setErrorMsg(input, errorMsg){
    const formControl = input.parentElement
    const icon = formControl.querySelector("i")
    icon.classList.add("active")
    const small = formControl.querySelector("small")
    small.innerHTML = errorMsg
    input.classList.add("active")
}
form.addEventListener("submit", validate)