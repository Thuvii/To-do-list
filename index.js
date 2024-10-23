let input = document.querySelector(".input")
let inputBtn = document.querySelector(".inputBtn")
let list = document.querySelector(".list")

inputBtn.addEventListener("click", ()=>{
    let div = document.createElement("div")
    let ch = document.createElement("li")
    let deleteBtn = document.createElement("button")
    if(input.value != ""){
        ch.innerText = input.value;
        ch.style.display = "inline"
        deleteBtn.innerText = "delete"
        div.classList.add("space")
        div.appendChild(ch)
        div.appendChild(deleteBtn)
        list.appendChild(div)
        input.value = "";
    }
    ch.addEventListener("click", ()=>{
        if(ch.style.textDecoration  ==  "none"){
            ch.style.textDecoration  =  "line-through"
            ch.style.opacity = 0.5
        }else{
            ch.style.textDecoration  =  "none"
            ch.style.opacity = 1
        }    
    })
    
    deleteBtn.addEventListener("click", (e)=>{
        div.remove()
    })
})