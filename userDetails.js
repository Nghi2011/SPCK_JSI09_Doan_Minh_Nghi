let userSession = JSON.parse(localStorage.getItem("userSession"))
let profileContainer = document.getElementById("profileContainer")
if (!userSession){
    location.href="signIn.html"
}
const emailAddress = localStorage.getItem("saveEmailAddress")
const saveData = async()=>{
    await database.collection("userDatabase").where("emailAddress","==",emailAddress).get().then(doc => {console.log(doc.docs[0].data()),localStorage.setItem("savedProfile",JSON.stringify(doc.docs[0].data()))})
    }
saveData()
const profile = JSON.parse(localStorage.getItem("savedProfile"))
let createCard= ""
    let introduction = ""
    if (!profile.introduction){
        introduction="Không có giới thiệu về người dùng"
    }
    else{
        introduction= profile.introduction
    }
    if (!profile.imageOfUser){
        createCard = `<div class="card" style="width: 30rem;">
        <div class="container" id="imagePlaceholder" style="justify-self: center;">
        </div>
  <img src="../images/icons8-user-100.png" class="card-img-top rounded" alt="...">
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
    else{
        createCard = `<div class="card" style="width: 30rem;">
  <img src="${profile.imageOfUser}" style="width:200px;height:200px;justify-self: center" class="card-img-top rounded-circle" alt="...">
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
  <div class="container bg-green2">
    <a href="#" class="card-link">Địa chỉ Email: ${profile.emailAddress}</a>
    <a href="#" class="card-link">Vai trò/ vị trí: ${profile.role}</a>
  </div>
</div>
`
        profileContainer.innerHTML+=createCard
    }

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