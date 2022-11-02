import { useMemo } from 'react'
import { Task } from '../Task/Task.index'
import { BoxAlert } from '../BoxAlert/BoxAlert.index'
import styles from './tasks.module.css'


export function Tasks({
  tasks,
  searchTaskName,
  onRemoveTask,
  onChangeCompletedTask,
  onEditTask,
  onDeleteAllTask,
}) {
  const isVisibleTask = (task) => {
    const taskName = task.name.toLocaleLowerCase();
    return taskName.includes(searchTaskName);
  };

  const stateTasks = useMemo(() => {
    if (tasks.length === 0) {
      return "empty";
    } else if (!tasks.some((task) => isVisibleTask(task))) {
      return "search-empty";
    }

    return "default";
  }, [tasks, searchTaskName]);

  if (stateTasks === "empty") {
    return <BoxAlert type={stateTasks} />;
  }

  if (stateTasks === "search-empty") {
    return <BoxAlert type="warning" />;
  }

  return (
    <ul className={styles.tasks}>
      {tasks.map(
        (task) =>
          isVisibleTask(task) && (
            <Task
              {...task}
              key={task.id}
              onRemove={onRemoveTask}
              onEditTask={onEditTask}
              onDeleteAllTask={onDeleteAllTask}
              onChangeCompleted={onChangeCompletedTask}
            />
          )
      )}
 
    </ul>
  );
}