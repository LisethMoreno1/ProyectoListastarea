import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { tasks as data } from "../data/tasks";


export  const TaskContext = createContext();


export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: task.length,
        description: task.description,
        complete: task.complete,
      },
    ]);
  }


  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
    Swal.fire({
      icon: "",
      title: "La Tarea ha sido Eliminada de manera sactifactoria",
    });
  }

  function ModificarTask() {
    Swal.fire({
      icon: "success",
      title: "Tarea realizada",
      showConfirmButton: false,
      timer: 1500,
    });
  }




  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        ModificarTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

