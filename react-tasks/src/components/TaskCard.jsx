import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import {useContext} from "react"
import { TaskContext } from "../context/TaskContext";
import "../style/taskcard.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { tasks } from "../data/tasks";



function TaskCard({ task }) {
  // const [marcado,setMarcado]= useState(false);

      const { deleteTask } = useContext(TaskContext);
      const { editarTask } = useContext(TaskContext);
      const { ModificarTask } = useContext(TaskContext);
      const [isSubscribed, setIsSubscribed] = useState(false);
      

const handleChange = (e) => {
if (e.target.checked) {
      console.log("✅ Checkbox is checked");
    } else {
      console.log("⛔️ Checkbox is NOT checked");
      Swal.fire({
        icon: "error",
        title: "La tarea no esta realizada",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    setIsSubscribed((current) => !current);
  };


  //  -------------------------------------------------------



// -------------------------------------------------------------------
  return (
    <div className="taskcardE">
      <h4 className="Cardh1">
        <input
          type="checkbox"
          value={isSubscribed}
          onChange={handleChange}
          id="subscribe"
          name="subscribe"
          onClick={() => ModificarTask(task.title)}
        />

        {task.title}
      </h4>

      <p>{task.description}</p>
      <button className="DeleteBoton" onClick={() => deleteTask(task.id)}>
        <AiFillDelete />
      </button>
      <button className="EditarBoton" onClick={() => editarTask(tasks)}>
        <AiFillEdit />
      </button>
    </div>
  );
}

export default TaskCard;
