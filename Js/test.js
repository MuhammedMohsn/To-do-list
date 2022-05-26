let form = document.querySelector("form");
let input = document.querySelector("input");
let list = document.querySelector(".list");
let clearBtn = document.querySelector(".clearBtn");
let emptyTasksDiv = document.querySelector(".empty_tasks");
let alertAreaDiv = document.querySelector(".alert_area");
let tasksCount = document.querySelector(".tasks_count")
// document.querySelector(".tasks-done")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value == "") {
        alertAreaDiv.innerHTML = "please enter a value";
        setTimeout(() => {
            alertAreaDiv.style.height ="0" ;
            alertAreaDiv.remove()

        }, 2000)
    }
    else {
        
        let list_item = document.createElement("li");
        list_item.className="list_item"
        list_item.innerHTML = `<span class="task">${input.value}</span> <span class="del">X</span>`
        list.appendChild(list_item)
        tasksCount.innerHTML = document.querySelectorAll(".list_item").length
        document.querySelectorAll(".task").forEach(item => {
            item.addEventListener("click", (e) => { 
        
                e.target.classList.toggle("done")
                // if(e.target.classList.contains("done")){e.target.classList.remove("done")}
            document.querySelector(".tasks_done").innerHTML = document.querySelectorAll(".done").length

        })})
        emptytask()
        document.querySelector(".tasks_done").innerHTML = document.querySelectorAll(".done").length
        document.querySelectorAll(".del").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.target.parentNode.remove();
                tasksCount.innerHTML = document.querySelectorAll(".list_item").length;
                emptytask()
                document.querySelector(".tasks_done").innerHTML = document.querySelectorAll(".done").length
    
            })
        })
        clearBtn.addEventListener("click", () => {
            // list.children.remove()
            list.innerHTML=""
            tasksCount.innerHTML = document.querySelectorAll(".list_item").length;
            document.querySelector(".tasks_done").innerHTML = document.querySelectorAll(".done").length
            emptytask()
        })
    
        input.value = ""
        input.focus()
        emptytask()
        
    }
    

})


function emptytask(){
    
    if (list.children.length == 0) {
        emptyTasksDiv.innerHTML = "empty tasks"
    }
    else {
        emptyTasksDiv.innerHTML = ""
    }

}