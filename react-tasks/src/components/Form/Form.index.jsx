import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { FaPlus } from 'react-icons/fa'
import { Input } from '../Input/Input.index'
import styles from './form.module.css'



export function Form({ onSubmit }) {
  const [taskName, setTaskName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(!!taskName) {
      const newTask = {
        id: uuid(),
        name: taskName,
        completed: false,
      }

      onSubmit(newTask)
      setTaskName('')

    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={taskName}
        placeholder="Nombre de la tarea"
        onChange={(event) => setTaskName(event.target.value)}
      />

      


      <button
        type="submit"
        disabled={taskName === ""}
        className={styles.form__button}
      >
        <FaPlus size={12} />
        Añadir
      </button>
      
    </form>
  );
}