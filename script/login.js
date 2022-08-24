document.querySelector("form").addEventListener("submit",submitbtn)
let login_data=JSON.parse(localStorage.getItem("customer_login"))||[]
function submitbtn(){
    event.preventDefault()
    let mobile=document.querySelector("#mobile").value

    let password=document.querySelector("#Password").value

    // console.log(mobile,password)

    let obj={
        mobile,
        password
    }
    login_data.push(obj)
    // console.log(login_data)
    localStorage.setItem("customer_login",JSON.stringify(login_data))




    
}