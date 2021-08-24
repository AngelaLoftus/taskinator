var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");


//function to create a new task on list
var createTaskHandler = function(event) {
    //prevents page from automatically refreshing 
    event.preventDefault();

    //adds new item to list and styles it same as others
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    listItemE1.textContent = "This is a new task.";
    tasksToDoE1.appendChild(listItemE1);
}

//listens for the user to submit the form (submit listener)
formE1.addEventListener("submit", createTaskHandler);

