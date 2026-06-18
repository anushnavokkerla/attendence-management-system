const lgnbtn=document.getElementById("lgn-btn")
//console.log(lgnbtn)
lgnbtn.addEventListener("click",function(){
     event.preventDefault()
     const Email=document.getElementById("Email").value
     const Password=document.getElementById("Password").value
     console.log(Password)
     if(Email==="" || Password===""){
        alert("please fill all the fields")
        return
     }
     const users=JSON.parse(localStorage.getItem("users"))
     const matcheduser=users.find(function(user){
         return user.Email === Email && user.Password === Password
     })
     if(matcheduser){
        alert("login succesfull")
        window.location.href="index.html"
     }
     else{
        alert("username or password mismatch")
     }
})