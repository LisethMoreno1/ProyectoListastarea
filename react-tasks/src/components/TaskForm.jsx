import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { tasks } from "../data/tasks";
import "../style/taskform.css";


function TaskForm(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);






     const handleSubmit=(e)=>{ e.preventDefault();
   createTask({
      title,
      description
    });
    setTitle("");
    setDescription("");
  }

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <input
        
          className="inputForm"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />

        <textarea
          className="textareaForm"
          placeholder="Escribe la Descripcion de la Tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="formButton">+</button>
      </form>
    </div>
  );
}

export default TaskForm;