let userSession = JSON.parse(localStorage.getItem("userSession"))
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const btnSignOut = document.getElementById("btnSignOut")
const signOut = () =>{
    if (confirm("Bạn có chắc chắn muốn đăng xuất không?")){
        authentication.signOut()
    localStorage.removeItem("userSession")
    location.href="signUp.html"
    }
    
}
btnSignOut.addEventListener("click",signOut)
const btnAccount = document.getElementById("accountOfUser")
btnAccount.innerHTML=userSession.username
btnAccount.addEventListener("click", async function(){
    localStorage.setItem("recallUser","yes")
    location.href="UserDetails.html"
    
})
// function redirectPage(){
//   redirectPage()
// }