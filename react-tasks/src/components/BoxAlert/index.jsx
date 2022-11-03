import { FaInfoCircle } from "react-icons/fa";

import styles from './index.module.css'

export function BoxAlert({ type }) {
  return (
    <div className={`${styles.boxAlert} ${styles[type]}`}>
      {type === "empty" && (
        <>
          <FaInfoCircle size={36} />
          <p>La lista de tareas está vacía.</p>
        </>
      )}

      {type === "warning" && (
        <>
          <FaInfoCircle size={36} />
          <p>
            No se ha podido encontrar ninguna tarea, por favor, inténtelo de
            nuevo.
          </p>
        </>
      )}
    </div>
  );
}