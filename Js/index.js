let form=document.querySelector("form");
let input=document.querySelector("input");
let list=document.querySelector(".list");
let clearBtn=document.querySelector(".clearBtn");
let emptyTasksDiv=document.querySelector(".empty_tasks");
let alertAreaDiv=document.querySelector(".alert_area");

window.onload=input.focus()
form.onsubmit=newTask
taskEmpty()
function newTask(e){
e.preventDefault();

if (input.value==''){   
     alertAreaDiv.innerHTML=` First please insert value in input field!` 
     setTimeout( ()=>{

    // nval.remove()
    alertAreaDiv.style.height=0
    alertAreaDiv.remove()}
    ,2000)
}

else{
// add task
let list_item=document.createElement("li")
list_item.className="list_item";
let inputCap=input.value.substr(0,1).toUpperCase()+input.value.substr(1,)
list_item.innerHTML=`
<span class="task"> ${inputCap}</span>
<span class="del"> X</span>`
list.appendChild(list_item)

input.value=""
input.focus()
taskEmpty()
itemcount(list.children.length)
countTaskDone()
// delete task
let deleteBtns=document.querySelectorAll(".del")
deleteBtns.forEach(btn => {
    btn.onclick=deleteTask
    
});
// clear tasks
clearBtn.onclick=clearTasks

//add class done to list items
let listitems=document.querySelectorAll(".list_item")
listitems.forEach(ele=>{

    ele.children[0].onclick=done
})
}
}
function deleteTask(e){
    e.target.parentNode.remove()
    taskEmpty()
    itemcount(list.children.length)
    countTaskDone()
    }
function clearTasks(){
    list.innerHTML=""
    taskEmpty()
    itemcount(list.children.length)
    countTaskDone()
}

function taskEmpty(){

    if(list.children.length===0){ emptyTasksDiv.innerHTML="tasks is empty"}
    else{emptyTasksDiv.innerHTML=""}
}
function done(e){
   
// e.target.className="done"
e.target.classList.toggle("done")
countTaskDone()
}
function itemcount(count){
    let tasksCount=document.querySelector(".tasks_count")
    tasksCount.innerHTML=count
}
function countTaskDone(){
let donelength=document.querySelectorAll(".done").length
document.querySelector(".tasks_done").innerHTML=donelength
}

// fab buttons
let fab=document.querySelector(".main_btn")
fab.addEventListener("click",()=>{
    document.querySelector(".fab_btns").classList.toggle("show")
    if(document.querySelector(".fab_btns").classList.contains("show")){
        document.querySelector(".main_btn .fa-circle-plus").classList.add("rotate")
    }
    else{
        document.querySelector(".main_btn .fa-circle-plus").classList.remove("rotate")
    }
})