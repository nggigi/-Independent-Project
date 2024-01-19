
function signIn(){
    alert("Log in Successful!")
}


fetch("http://localhost:3000/cars")
.then(res=> res.json())
.then(cars =>cars.forEach(car =>renderOneCar(car) 
    ))

    function renderOneCar(car){
        let divEl= document.getElementById("container")
        let p = document.createElement("p");
       p.innerText=car.Title
       p.style.cssText="color:red"
        divEl.appendChild(p)
    }
document.addEventListener("DOMContentLoaded", ()=>{
    let formEl=document.querySelector('form')
    formEl.addEventListener('submit', (event)=>{
        event.preventDefault()
        let carObject={
            model:event.target.title
            
            
        }
    })
})

function rememberme(){
let emaiEl= document.getElementById("email-el").value;
let passwordEl= document.getElementById("password-el").value
 alert(`${emaiEl} ${passwordEl} saved successfully`  )
}
    