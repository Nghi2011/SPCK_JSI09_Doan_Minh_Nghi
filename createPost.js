const upload_Preset = "yj9yicde"
const projectName ="ddznzuvxu"
const URL_Cloudinary = `https://api.cloudinary.com/v1_1/${projectName}/image/upload`
const btnPublish = document.getElementById("btnPublish")
console.log(btnPublish)
console.log(new Date())
if (!userSession){
    location.href="signIn.html"
}
const processAndSavePosts = () =>{
    if (confirm("Bạn có chắc chắn muốn đăng bài viết của bạn lên diễn đàn?")){
        const postTitle = document.querySelector("#postTitles").value
    const subject = document.getElementById("selectSubject").value
    const grade = document.getElementById("selectGrade").value
    const postContent = document.getElementById("postContentGet").value
    const backgroundColor = document.getElementById("backgroundColorGet").value
    const chooseImage = document.getElementById("chooseFile").files[0]
    if (!postTitle || !subject || !grade || !postContent || !backgroundColor){
        alert("Vui lòng nhập đầy đủ thông tin cho bài viết của bạn!")
        return 
    }
    else if(postContent.length < 10){
        alert("Vui lòng nhập nội dung bài đăng dài hơn 30 ký tự!")
        return
    }
    else{
        console.log(postTitle,subject,grade,postContent,backgroundColor,chooseImage)
        if(chooseImage){
            const formAPI = new FormData
            formAPI.append("file", chooseImage)
            formAPI.append("upload_preset",upload_Preset)
            console.log(formAPI)
            fetch(URL_Cloudinary, {
                method:"POST",
                body: formAPI,
            })
            .then(response => response.json())
            .then(imageResult => {console.log(imageResult);localStorage.setItem("imageResult",JSON.stringify(imageResult))} )
            var postDataStructure = {
            author: userSession.username,
            postTitle,
            subject,
            grade,
            postContent,
            backgroundColor,
            imageURL: JSON.parse(localStorage.getItem("imageResult")).secure_url,
            dayPublished: new Date().toDateString(),
            emailAddress: userSession.emailAddress
        }
        }
        else{
            var postDataStructure = {
            author: userSession.username,
            postTitle,
            subject,
            grade,
            postContent,
            backgroundColor,
            imageURL: JSON.parse(localStorage.getItem("imageResult")).secure_url,
            dayPublished: new Date().toDateString(),
            emailAddress: userSession.emailAddress
        }
        }
        
        console.log(postDataStructure)
            database.collection("EducammunityForumPosts").add(postDataStructure)
            .then(docReference => {
                alert("Chúc mừng bạn hoàn thành đăng bài viết!")
                alert(`Mã ID định danh cho bài viết của bạn là ${docReference.id}`)
                database.collection("EducammunityForumPosts").doc(docReference.id).update({id: docReference.id})
                // window.location.href="index.html"
            })
            .catch(error =>{
                alert("Lỗi xảy ra trong quá trình lưu văn bản vào dữ liệu")
                console.error(error)
            })
        
    }
    }
}
btnPublish.addEventListener("click",processAndSavePosts)
// const btnSignOut = document.getElementById("btnSignOut")
// const signOut = () =>{
//     if (confirm("Bạn có chắc chắn muốn đăng xuất không?")){
//         authentication.signOut()
//     localStorage.removeItem("userSession")
//     location.href="signUp.html"
//     }
    
// }
// btnSignOut.addEventListener("click",signOut)
// || !chooseImageimageResult