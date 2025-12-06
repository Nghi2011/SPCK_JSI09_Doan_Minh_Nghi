const btnSignUp = document.querySelector("#btnSignUp")
const signUpProcess = (e) => {
    e.preventDefault()
    let username = document.getElementById("usernameProvide").value
    let emailAddress = document.getElementById("emailAddressProvide").value
    let password = document.getElementById("passwordProvide").value
    let confirmPassword = document.getElementById("passwordConfirm").value
    if ( username == "" || emailAddress =="" || password=="" ||confirmPassword ==""){
        alert("Vui lòng nhập đầy đủ thông tin cá nhân ")
    }
    else if ( password !== confirmPassword){
        alert("Vui lòng xác nhận mật khẩu trùng với mật khẩu đã nhập!")
    }
    else{
        const userData ={
                username,
                emailAddress,
                password,
                role_id: 2,
            }
        localStorage.setItem("savedUserData",JSON.stringify(userData))
        location.href="signUpLastStep.html"
    }
}
btnSignUp.addEventListener("click",signUpProcess)