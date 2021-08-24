var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");


//function to create a new task on list
var taskFormHandler = function(event) {
    //prevents page from automatically refreshing 
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name ='task-name']").value;
    var taskTypeInput = document.querySelector("select[name = 'task-type']").value;

    //package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //send it as an argument to createTaskE1
    createTaskE1(taskDataObj);
    
}

//creating a new function
var createTaskE1 = function(taskDataObj) {
    //create list item
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";

    //create div to hold task info and add to list item
    var taskInfoE1 = document.createElement("div");
    //give it a class name
    taskInfoE1.className = "task-info";
    //add HTML content to div
    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class = 'task-type'>" + taskDataObj.type + "</span>";

    listItemE1.appendChild(taskInfoE1);

    //add entire list item to list
    tasksToDoE1.appendChild(listItemE1);
}


//listens for the user to submit the form (submit listener)
formE1.addEventListener("submit", taskFormHandler);

