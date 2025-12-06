let profileContainer = document.getElementById("profileContainer")
if (!userSession){
    location.href="signIn.html"
}
console.log(localStorage.getItem("recallUser") == "yes")
if (localStorage.getItem("recallUser") == "yes"){
  // const emailAddress = localStorage.getItem("saveEmailAddress1")
  const emailAddress = userSession.emailAddress
  localStorage.setItem("uniqueEmail",emailAddress)
  localStorage.removeItem("recallUser")
}
else{
  const emailAddress = localStorage.getItem("saveEmailAddress")
  localStorage.setItem("uniqueEmail",emailAddress)
}

const saveData = async()=>{
    await database.collection("userDatabase").where("emailAddress","==",localStorage.getItem("uniqueEmail")).get().then(doc => {console.log(doc.docs[0].data()),localStorage.setItem("savedProfile",JSON.stringify(doc.docs[0].data()))})
    const profile = JSON.parse(localStorage.getItem("savedProfile"))
let createCard= ""
    let introduction = ""
    if (!profile.introduction){
        introduction="Không có giới thiệu về người dùng"
    }
    else{
        introduction= profile.introduction
    }
        createCard = `<div class="card" style="width: 30rem;">
        <div class="container" id="imagePlaceholder" ">
        </div>
  <img src="${profile.imageOfUser}" alt="...">
  <div class="card-body">
    <h5 class="card-title">Thông tin người dùng: @${profile.username}</h5>
    <p class="card-text">Giới thiệu nhỏ: ${introduction}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Tên người dùng: <span class="badge text-bg-primary rounded-pill fs-5">${profile.username}</span></li>
    <li class="list-group-item">Giới tính: <span class="badge text-bg-success rounded-pill fs-5">${profile.gender}</span></li>
    <li class="list-group-item">Đang học lớp khối <span class="badge text-bg-danger rounded-pill fs-5">${profile.grade}</span></li>
    <li class="list-group-item">Ngày sinh: <span class="badge text-bg-info rounded-pill fs-5">${profile.birthdate}</span></li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Địa chỉ Email: ${profile.emailAddress}</a>
    <a href="#" class="card-link">Vai trò/ vị trí: ${profile.role}</a>
  </div>
</div>`
        profileContainer.innerHTML+=createCard
  
  }
saveData()


// const btnSignOut = document.getElementById("btnSignOut")
// const signOut = () =>{
//     if (confirm("Bạn có chắc chắn muốn đăng xuất không?")){
//         authentication.signOut()
//     localStorage.removeItem("userSession")
//     location.href="signUp.html"
//     }
    
// }
// btnSignOut.addEventListener("click",signOut)
// Usernameconst userDataGet = card-body