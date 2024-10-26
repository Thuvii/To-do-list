let input = document.querySelector(".input")
let inputBtn = document.querySelector(".inputBtn")
let list = document.querySelector(".list")


inputBtn.addEventListener("click", ()=>{
    let task = input.value.trim();

    if(task){
        const taskItem = createTask(task)
        list.append(taskItem)
        input.value = ""
    }
})


function createTask(task){
    let div = document.createElement("div")
    div.classList.add("task-item")

    let li = document.createElement("li")
    li.innerText = task
    li.classList.add("task")
    
    let deleteBtn = createDeleteBtn(div)

    div.appendChild(li)
    div.appendChild(deleteBtn)


    li.addEventListener("click",toggleStatus)
    return div
}


function createDeleteBtn(parentDiv){
    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    deleteBtn.classList.add("deleteBtn")

    deleteBtn.addEventListener("click", ()=>{
        parentDiv.remove()
    })
    return deleteBtn
}


function toggleStatus(e){
    const status = e.target
    const iscomplete = status.style.textDecoration === "line-through"

    status.style.textDecoration = iscomplete ? "none" : "line-through"
    task.style.opacity = iscomplete ? 1 : 0.5
}