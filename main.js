let count = 0;
//for to add task to to do list when button is pressed
function push(){
    if(document.querySelector('#newTask input').value.length == 0)
    {alert ("Please Enter Task !!!!!")}
    else{document.getElementById('tasks').innerHTML += `
    
        <div class = "task">
        <span id= "taskname">
        ${document.querySelector('#newTask input').value}
        </span>
        <button class="delete">
        <i class="fad fa-trash-alt"></i>   
        </button>
    `
    //for deleting task when delete button is pressed
    let currentTasks = document.querySelectorAll(".delete");
    for(let i=0 ; i< currentTasks.length; i++){
        currentTasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
        //for overlining a task thats completed
    let tasks = document.querySelectorAll('.task');
    for( let i=0 ; i<tasks.length; i++){
        tasks[i].onclick = function (){
            this.classList.toggle('completed');
        }
    }
 //to clear taskbar after click for task
    document.querySelector('#newTask input').value = "";
}


};
