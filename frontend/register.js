const regBtn =document.getElementById("reg-button")
//console.log(regBtn)
regBtn.addEventListener("click",function(){
    event.preventDefault()
    const name=document.getElementById("Name").value
    const email=document.getElementById("Email").value
    const password=document.getElementById("Password").value
    const repassword=document.getElementById("RePassword").value
 
    console.log(password)
    if(password!=repassword){
        alert("password miss match")
        return
    }
    if(password===repassword){
        alert("login sucsessfull")

    }
    const user={
        name: name,
        email: email,
        password: password
}
    let users = JSON.parse(localStorage.getItem("user")) || []
    users.push(user)
    console.log(users)
    localStorage.setItem("users",JSON.stringify(users))
    

    
})
