// const reference = rtDatabase userID = userID1userReference1
// let userID = ""
// const writeData = (userID, username, emailAddress,message) =>{
    
//     rtDatabase.ref("users/"+userID).set({
//         username:username,
//         emailAddress: emailAddress,
//         message
//     });
// }
// const readData = (userID)=>{
//     let userReference = rtDatabase.ref("users/"+userID)
//     userReference.once("value").then((snapShot) =>{
//         const collectedData = snapShot.val()
//         console.log(collectedData)
//     })
// }
// const listenForUserData = (userID) =>{
//     let userReference = rtDatabase.ref("users/"+userID)
//     userReference.on("value", (snapShot)=>{
//         const collectedData = snapShot.val()
//         console.log(collectedData)
//     })
// }
// const updateDataOfUsers = (userID,emailAddress,) =>{
//     const updates ={}
//     console.log(updates["/users/"+userID+"/emailAddress"])
//     console.log(updates["/users/"+userID+"/email"]= emailAddress)
//     updates["/users/"+userID+"/emailAddress"]= emailAddress
    
//     rtDatabase.ref().update(updates)
// }
// const deleteUser= (userID) =>{
//     rtDatabase.ref("user/"+userID).remove()
//     .then(()=>alert("Xóa tài khoản người dùng thành công"))
//     .catch(error => {alert("Lỗi không thể xáo tài khoản người dùng!"),console.log(error)})
// }
// console.log(rtDatabase.ref())
// writeData(1,"Đoàn Minh Nghị","nghidoandn@gmail.com","Tớ tên là Đoàn Minh Nghị")
// readData(1)
// listenForUserData(1)userID, 
// updateDataOfUsers(1,"nhatdbd@gmail.com")/+userIDuserIDProvider,userIDProvider++
const rtDatabase = firebase.database(app)
let userSession = JSON.parse(localStorage.getItem("userSession"))
// let userIDProvider = 0const
let messagesContainer = document.getElementById("messagesContainer")
const btnSend = document.getElementById("btnSendMessage")
const writeMessage =(username,emailAddress,message) =>{
    rtDatabase.ref("users/").push({
        username,
        emailAddress,
        message
    })
}
const listenAndGetData = () =>{
    let messageReference = rtDatabase.ref("users")
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
                <p class="lead text-decoration-underline">Người gửi: <span class="badge text-bg-primary">${collectedMessage.username}</span></p>
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
console.log()
const time = new Date(new Date().getTime() *1000).getDay()
let imageHold = document.getElementById("image")
imageHold.src= avatarURL
btnSend.addEventListener("click",sendMessageProcess)
listenAndGetData()
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))