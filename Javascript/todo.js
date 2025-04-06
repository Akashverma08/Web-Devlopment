todo=[];

let req=prompt("enter your request:");

while(true){
    if(req=='quit'){
        console.log("Quitting To-Do");
        break;
    }
    if(req="list"){
        for(let i=0;i<todo.length-1;i++){
            console.log(i,todo[i]);
        }
    }
    else if(req=="add"){
        let task=prompt("Enter the task you want to add");
        todo.push(task);
        console.log("Task Added");

    }
    else if(req=="delete"){
        let idx=prompt("Enter the index number of task to delete:");
        todo.splice(idx,1);
        console.log("Task Deleted");
    }
}