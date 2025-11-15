if (!userSession){
    location.href="signIn.html"
}
const btnAccount = document.getElementById("accountOfUser")
btnAccount.innerHTML=userSession.username
localStorage.setItem("saveEmailAddressOfUser",userSession.emailAddress)
let insertPost = document.getElementById("insertPost")
console.log(insertPost)
function redirectPage(){
  location.href="UserDetails.html"
}
console.log()
// const savedId = localStorage.getItem("saveID")
const getSavedPost = async (savedId) =>{
    let savedPost = await database.collection("EducammunityForumPosts").doc(savedId).get()
    let postObject = savedPost.data()
    console.log(savedPost.data())
  insertPost.innerHTML +=`<div class="card container-fluid" >
      <div class="container"><img src="${postObject.imageURL}"style="max-width:1000px ;max-height:1000px"  class="card-img-top" alt="..."></div>
      <div class="card-body">
        <button class="btn btn-outline-info" id="btnUserDetails" onclick="redirectPage()" ><h5 class="open-sans text-center text-success-emphasis text-decoration-underline">Người gửi: ${postObject.author}</h5></button>
        <h5 class="card-title opensans">Ngày đăng:${postObject.dayPublished}</h5>
        <h5 class="card-title opensans">${postObject.postTitle}</h5>
        <p class="card-text opensans">${postObject.postContent}</p>
        <div id="sortByCategories">
          <p class="lead text-center border rounded open-sans badgeStructure1">Lớp<span class="badge text-bg-info rounded-pill fs-4">${postObject.grade}</span></p>
          <p class="lead text-center border rounded open-sans badgeStructure2">Môn học<span class="badge text-bg-danger rounded-pill fs-4">${postObject.subject}</span></p>
        </div>
      </div>
      
    </div`
    localStorage.setItem("saveEmailAddress",postObject.emailAddress)
}

getSavedPost(savedId)

//Phòng bình luận học hành
const rtDatabase = firebase.database(app)

let messagesContainer = document.getElementById("messagesContainer")
const btnSend = document.getElementById("btnSendMessage")
const writeMessage =(username,emailAddress,message) =>{
    rtDatabase.ref(`${savedId}/`).push({
        sentAt: database.FieldValue.serverTimestamp(),
        username,
        emailAddress,
        message
    })
}
const listenAndGetData = () =>{
    let messageReference = rtDatabase.ref(`${savedId}`)
    console.log(messageReference)
    messageReference.on("child_added", snapShot =>{
        let addClassForContainer =""
        const collectedMessage = snapShot.val()
        console.log(collectedMessage)
        if (collectedMessage.emailAddress == userSession.emailAddress){
            addClassForContainer = "position-relative start-50"
        }
        else{
            addClassForContainer = "position-relative start-0"
        }
        console.log(`<div class="d-block w-50 border border-2 rounded outline-green mb-3 ${addClassForContainer}">
                <p class="lead text-decoration-underline">Người gửi: <span class="badge text-bg-primary">${collectedMessage.username}</span></p>
                <p class="fs-5 bg-blue2 border rounded open-sans p-1">${collectedMessage.message}</p>
            </div>`)
        messagesContainer.innerHTML+=`<div class="d-block w-50 border border-2 rounded outline-green mb-3 ${addClassForContainer}">
                <p class="lead ">Người gửi: <span class="badge text-bg-primary">${collectedMessage.username}</span></p>
                <p class="fs-5 bg-blue2 border rounded open-sans p-1">${collectedMessage.message}</p>
            </div>`
    })
}
const sendMessageProcess = ()=>{
    
    const messageProvide = document.getElementById("messageBox")
    if (messageProvide.value == ""){
        alert("Vui lòng nhập tin nhắn bạn muốn gửi đi!")
        return
    }
    else{
        writeMessage(userSession.username,userSession.emailAddress,messageProvide.value)
        messageProvide.value = ""
    }
}
btnSend.addEventListener("click",sendMessageProcess)
listenAndGetData()
// <button id="${postObject.id}" class="btn btn-outline-danger" onclick="getAndSaveId(${postObject.id})">Tham gia thảo luận </button>style="max-width=90px;max-height=20px"let userSession = JSON.parse(localStorage.getItem("userSession"))