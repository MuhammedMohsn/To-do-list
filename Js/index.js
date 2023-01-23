let form = document.querySelector("form");
let input = document.querySelector("input");
let list = document.querySelector(".list");
let clearBtn = document.querySelector(".clearBtn");
let emptyTasksDiv = document.querySelector(".empty_tasks");
let alertAreaDiv = document.querySelector(".alert_area");

window.onload = input.focus()
form.onsubmit = newTask
taskEmpty()
function newTask(e) {
    e.preventDefault();
    if (input.value == '') {
        alertAreaDiv.innerHTML = ` First please insert value in input field!`
        setTimeout(() => {
            alertAreaDiv.style.height = 0
            alertAreaDiv.remove()
        }
            , 2000)
    }

    else {
        // add task
        let list_item = document.createElement("li")
        list_item.className = "list_item";
        let inputCap = input.value.substr(0, 1).toUpperCase() + input.value.substr(1,)
        list_item.innerHTML = `
<span class="task"> ${inputCap}</span>
<span class="del"> X</span>`
        list.appendChild(list_item)
        input.value = ""
        input.focus()
        taskEmpty()
        itemcount(list.children.length)
        countTaskDone()
        // delete task
        let deleteBtns = document.querySelectorAll(".del")
        deleteBtns.forEach(btn => {
            btn.onclick = deleteTask
        });
        // clear tasks
        clearBtn.onclick = clearTasks

        //add class done to list items
        let listitems = document.querySelectorAll(".list_item")
        listitems.forEach(ele => { ele.children[0].onclick = done })
    }
}
function deleteTask(e) {
    e.target.parentNode.remove()
    taskEmpty()
    itemcount(list.children.length)
    countTaskDone()
}
function clearTasks() {
    list.innerHTML = ""
    itemcount(list.children.length)
    countTaskDone()
}

function taskEmpty() {
    if (list.children.length === 0) { emptyTasksDiv.innerHTML = "tasks are empty" }
    else { emptyTasksDiv.innerHTML = "" }
}
function done(e) {
    e.target.classList.toggle("done")
    countTaskDone()
}
function itemcount(count) {
    let tasksCount = document.querySelector(".tasks_count")
    tasksCount.innerHTML = count
}
function countTaskDone() {
    let donelength = document.querySelectorAll(".done").length
    document.querySelector(".tasks_done").innerHTML = donelength
}
