const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const todoCount = document.getElementById("todoCount");
let count = 0;

// when a user clicks on the button, todo item gets added to the list.
function addTask(){
    
    if(inputBox.value ===''){
        alert("You must write something!");
        todoCount.textContent = 0;
    }
    else{
        
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
        count += 1;
        todoCount.textContent = count;
    }
    inputBox.value='';
    saveData();
}



listContainer.addEventListener("click", function(e){
    //check the item off the list
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        countTask();
        saveData();
    }
    // delete the todo item completely from the list.
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        countTask()
        saveData();
    }
},false);

//decreasing task number by 1
function countTask(){
    if (count > 0){
        count -= 1;
        todoCount.textContent = count;
    }    
}
//save the tasks 
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
    localStorage.setItem("count",todoCount.textContent);
}
//shows task list even after loading the page
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
    todoCount.textContent=localStorage.getItem("count");
}
showTask();