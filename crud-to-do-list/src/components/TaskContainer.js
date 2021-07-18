import React from 'react'

function TaskContainer({isCompleted, student, task, id, onDelete, onUpdate, taskCompleted}) {
  return (
    <div>
      <p>Completado: {isCompleted}</p>
      <p>Estudiante: {student}</p>
      <p>Tarea: {task}</p>
      <button onClick={() => {onUpdate(taskCompleted)}}>√</button>
      <button onClick={() => {onDelete(id)}}>X</button>
    </div>
  )
}

export default TaskContainer
