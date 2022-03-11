const hambur = document.getElementById("hambur")
const close = document.getElementById("close")
const nav = document.querySelector(".navbar")

if(hambur){
    hambur.addEventListener("click",()=>{
        nav.classList.add("active")
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active")
    })
}