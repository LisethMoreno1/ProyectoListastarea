import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../style/tasklist.css";



function TaskList() {
 const { tasks } = useContext(TaskContext);
 
  
  if (tasks.length===0){
    return <h1 className="taskh1">No hay Tareas</h1>
  }

  return (
    <div >
      {tasks.map((task, id) => (
        <TaskCard key={id} task={task} />
      ))}
    </div>
  );
}



export default TaskList;
