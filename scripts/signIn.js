const btnSignIn = document.querySelector("#btnSignIn")
const signInProcess =  (e) => {
    e.preventDefault()
    
    let emailAddress = document.getElementById("emailAddressProvide").value
    let password = document.getElementById("passwordProvide").value
    
    if ( emailAddress =="" || password==""){
        alert("Vui lòng nhập đầy đủ thông tin cá nhân ")
    }
    else{
        authentication.signInWithEmailAndPassword(emailAddress,password)
        .then(userCredential =>{
            // const searchUser = 
            // console.log(searchUser).then(doc => console.log(doc.docs[0]))processedUser.username,searchUser
            const saveData = async()=>{
                    await database.collection("userDatabase").where("emailAddress","==",emailAddress).get().then(doc => {console.log(doc.docs[0].data()),localStorage.setItem("savedUsername",JSON.stringify(doc.docs[0].data()))})
            }
            saveData()
            console.log(userCredential.user.uid)
            let userData ={
                username: JSON.parse(localStorage.getItem("savedUsername")).username ,
                emailAddress,
                password,
                user: userCredential.user,
                role_id: 2,
            }
            console.log(userData)
            localStorage.setItem("userSession",JSON.stringify(userData))
            alert("Đăng nhập thành công!")
            alert(`ID của bạn là ${userCredential.user.uid}`)
            location.href="index.html"
        })
        .catch(error =>{
            alert("Lỗi xuất hiện khi đăng nhập tài khoản, vui lòng thử lại")
            console.log(error)
        })
    }
}
btnSignIn.addEventListener("click",signInProcess)