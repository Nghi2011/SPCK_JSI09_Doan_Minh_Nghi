if (userSession){
    alert(`Xin chào người dùng ${userSession.username}`)
    console.log(userSession)
}
else{
    alert("Bạn đang tham gia diễn đạt với tư cách là khách")
}
// if(resetPageDecisions){
//   console.log(resetPageDecisions)
// }getPosts = awaitdatabase.collection("EducammunityForumPosts").get()
// else{
//   console.log(2,resetPageDecisions)
// }console.log()

let currentDate = document.getElementById("currentDate")
currentDate.innerText+=` ${new Date().toDateString()}`

let educammunityForumPosts = document.getElementById("recentPosts")
var getPosts = 0
// const getPostsFormDataBase = async() =>{
//   getPostsFormDataBase()
// console.log(getPosts)
// }idD
function getAndSaveId(id){
  console.log(id.getAttribute("id"))
  localStorage.setItem("saveID",id.getAttribute("id"))
  location.href="discussionPages.html"
}
const processPosts= async(option) => {
  if (option==1){
    let html =``
    let getPosts = await database.collection("EducammunityForumPosts").get()
    getPosts.forEach(forumPost => {
        let postObject = forumPost.data()
        console.log(postObject.id)
        let postOutline = `<div class="card container-fluid w-25" >
      <img src="${postObject.imageURL}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title opensans">Ngày đăng:${postObject.dayPublished}</h5>
        <h5 class="card-title opensans">${postObject.postTitle}</h5>
        <p class="card-text opensans">${postObject.postContent}</p>
        <div id="sortByCategories" class="container">
          <p class="lead text-center border rounded open-sans badgeStructure1">Lớp<span class="badge text-bg-info rounded-pill fs-4">${postObject.grade}</span></p>
          <p class="lead text-center border rounded open-sans badgeStructure2">Môn học<span class="badge text-bg-danger rounded-pill fs-4">${postObject.subject}</span></p>
        </div>
      </div>
      <button id="${postObject.id}" class="btn btn-outline-danger" onclick="getAndSaveId(${postObject.id})">Tham gia thảo luận </button>
    </div>`
    console.log((postObject))
        html +=postOutline
    })
    educammunityForumPosts.innerHTML+=html
    localStorage.setItem("posts",JSON.stringify(getPosts))
  }
    // if (option == 2){

    // }
  }
processPosts(1)
// const btnSignOut = document.getElementById("btnSignOut")
// const signOut = () =>{
//     if (confirm("Bạn có chắc chắn muốn đăng xuất không?")){
//         authentication.signOut()
//     localStorage.removeItem("userSession")
//     location.href="signUp.html"
//     }
    
// }
// btnSignOut.addEventListener("click",signOut)
// getPostsFormDataBase()
// style="background-color:${postObject.backgroundColor}"let postsCollection = console.log(postsCollection)