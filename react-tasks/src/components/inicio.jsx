import React from 'react'
import { useEffect, useMemo, useState } from "react";
import { Form } from "./Form/Form.index";
import { Input } from "./Input/Input.index";
import { Tasks } from "./Tasks/Tasks.index";
import { FaTrashAlt } from "react-icons/fa";
import styles from "../styles/app.module.css";
import { ChakraProvider, Heading, extendTheme } from "@chakra-ui/react";
const LOCALSTORAGE_TASKS_KEY = "todolist-tasks";


export default function Inicio() {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTaskName, setSearchTaskName] = useState("");

    // AGREGAR ELEMENTOS A LA LISTA
    const onAddTask = (newTask) => {
      setTasks((currentState) => [...currentState, newTask]);
      setSearchTaskName("");
    };

    // ELIMINAR ELEMENTO DE LA LISTA
    const onRemoveTask = (taskId) => {
      setTasks((currentState) =>
        currentState.filter((task) => task.id !== taskId)
      );
    };

    // EDITAR ELEMENTOS DE LA LISTA
    const onEditTask = () => {};

    // ELIMINAR TODO LOS ELEMENTOS DE LA LISTA
    function onDeleteAllTask() {
      setTasks([]);
    }

    //  ELEMENTO QUE ESTAN COMPLETADOS
    const onChangeCompleted = (taskId) => {
      const taskIndex = tasks.findIndex((task) => task.id === taskId);

      const updatedTask = [...tasks];
      updatedTask[taskIndex].completed = !updatedTask[taskIndex].completed;

      setTasks(updatedTask);
    };

    // Este bloque de código se dispara cada vez que el
    // cambios de tareas (añadir, eliminar, actualizar)
    useEffect(() => {
      if (!isLoading) {
        localStorage.setItem(LOCALSTORAGE_TASKS_KEY, JSON.stringify(tasks));
      }
    }, [tasks]);

    // Este bloque de código se dispara al cargar la página del usuario
    useEffect(() => {
      const tasksLocal = localStorage.getItem(LOCALSTORAGE_TASKS_KEY);
      tasksLocal && setTasks(JSON.parse(tasksLocal));
      setIsLoading(false);
    }, []);

    const handleTermSearch = (e) => {
      const valueTerm = e.target.value.toLocaleLowerCase();
      setSearchTaskName(valueTerm);
    };

    // tOTAL DE TAREAS EN LA LISTA
    const totalTasks = useMemo(() => {
      return tasks.length;
    }, [tasks]);

    // TOTAL DE TAREAS REALIZADAS
    const totalCompletedTasks = useMemo(() => {
      return tasks.filter((task) => task.completed).length;
    });

      const theme = extendTheme({
        config: {
          useSystemColorMode: false,
          initialColorMode: "dark",
        },
      });

  return (
    <ChakraProvider theme={theme}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Lista De Tareas</h1>

          <Form onSubmit={onAddTask} />

          <hr />

          <Input
            type="text"
            value={searchTaskName}
            onChange={handleTermSearch}
            placeholder="Buscar una tarea"
          />

          <Tasks
            tasks={tasks}
            searchTaskName={searchTaskName}
            onRemoveTask={onRemoveTask}
            onEditTask={onEditTask}
            onDeleteAllTask={onDeleteAllTask}
            onChangeCompletedTask={onChangeCompleted}
          />

          <footer className={styles.footer}>
            <h6>
              Total de tareas:
              <span>{totalTasks}</span>
            </h6>

            <h6>
              Total de tareas realizadas:
              <span>{totalCompletedTasks}</span>
            </h6>
            <h6
              type="button"
              className={styles.footer}
              onClick={() => onDeleteAllTask(id, name)}
            >
              <FaTrashAlt size={16} />
            </h6>
          </footer>
        </div>
      </div>
    </ChakraProvider>
  );
}
