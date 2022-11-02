import { FaTrashAlt } from 'react-icons/fa'
import styles from './task.module.css'
import { TiEdit } from "react-icons/ti";


export function Task({id,name,completed,onRemove,onChangeCompleted,onEditTask}) {
  return (
    <>
      <li className={`${styles.task} ${completed ? styles.completed : ""}`}>
        <input
          type="checkbox"
          checked={completed}
          className={styles.task__checkbox}
          onChange={(e) => onChangeCompleted(id)}
        />
     
        <span className={styles.task__name}>{name}</span>
        <button
          type="button"
          className={styles.task__button}
          onClick={() => onRemove(id)}
        >
          <FaTrashAlt size={16} />
        </button>

        <button
          type="button"
          className={styles.task__button}
          onClick={() => onEditTask(id)}
        >
          <TiEdit size={16} />
        </button>
      </li>
    </>
  );
}