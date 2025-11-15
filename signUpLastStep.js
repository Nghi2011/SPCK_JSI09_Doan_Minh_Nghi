const upload_Preset1= "yj9yicde"
const projectName = "ddznzuvxu"
const URL_Cloudinary = `https://api.cloudinary.com/v1_1/${projectName}/image/upload`
let savedUserData = JSON.parse(localStorage.getItem("savedUserData"))
const btnSubmit = document.getElementById("btnSubmit")
console.log(URL_Cloudinary)
const signInLastStep = () =>{
    let role = document.getElementById("roleProvide").value
    let gender = document.getElementById("genderProvide").value
    let grade = document.getElementById("gradeProvide").value
    let birthdate = document.getElementById("birthdate").value
    let introduction = document.getElementById("introductionProvide").value
    let imageOfUser = document.getElementById("chooseImage").files[0]
    console.log(imageOfUser)
    if (!role || !gender || !grade || !birthdate){
        alert("Vui lòng nhập lại đủ các trường thông tin bắt buộc!")
        return
    }
    if (grade < 1 || grade > 12){
        alert("Vui lòng nhập đúng khối lớp bạn đang học!")
    }
    else{
        if (imageOfUser){
            const formAPI = new FormData
            formAPI.append("file", imageOfUser)
            formAPI.append("upload_preset",upload_Preset1)
            fetch(URL_Cloudinary, {
                method: "POST",
                body: formAPI,
            })
            .then(response => response.json())
            .then(imageResult => localStorage.setItem("imageOfUser",JSON.stringify(imageResult)))
        }
        savedUserData.role= role
        savedUserData.gender = gender
        savedUserData.grade = grade
        savedUserData.birthdate= birthdate
        savedUserData.introduction=introduction
        savedUserData.imageOfUser= JSON.parse(localStorage.getItem("imageOfUser")).secure_url
        console.log(savedUserData)
        authentication.createUserWithEmailAndPassword(savedUserData.emailAddress,savedUserData.password)
        .then(userCredential =>{
            console.log(userCredential)
            
            let userSession ={
                username: savedUserData.username,
                emailAddress: savedUserData.emailAddress,
                password: savedUserData.password,
                user: userCredential.user,
                role_id:2,

                }
            
            localStorage.setItem("userSession",JSON.stringify(userSession))
            database.collection("userDatabase").add(savedUserData)
            .then(docReference =>{
                alert("Tạo tài khoản người dùng thành công!")
                alert(`ID người dùng của bạn là ${docReference.id}`)
            })
            
            .catch(error =>{
                alert("Lỗi khi lưu thông tin người dùng, vui lòng thử lại")
                console.error(error)
            })
        })
        .catch(error => {
            alert(error.message)
            console.log(error.code)
        })
    }
}
btnSubmit.addEventListener("click",signInLastStep)
