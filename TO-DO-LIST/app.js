const tasks=[];

const addTask= ()=>{
    const taskInput=document.getElementById("inputTask");
    const text=taskInput.value.trim();
    if(text){
        tasks.push({text:text,completed:false});
        taskInput.value="";
        updateTaskList();
    }


}

const updateTaskList=()=>{
    const taskList=document.getElementById("task-list");
    taskList.innerHTML="";

    tasks.forEach(task=>{
        const listItem=document.createElement('li');

        listItem.innerHTML=`
        <div class="taskItem">
          <div class="task">
            <input type="checkbox" class="checkbox">
            <p>Finish this Project</p>
          
          </div>
          <div class="icons">
            <img src="bin.png" alt="">
            <img src="edit.png" alt="">
          </div>
        
        
        </div>
        `;

    })
    

}



document.getElementById("newTask").addEventListener("click",function(e){
    e.preventDefault();

    addTask();
})