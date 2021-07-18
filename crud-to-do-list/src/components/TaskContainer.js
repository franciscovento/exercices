import React from 'react'

function TaskContainer({isCompleted, student, task, id, onDelete, onUpdate}) {
  return (
    <div>
      <p>Completado: {isCompleted}</p>
      <p>Estudiante: {student}</p>
      <p>Tarea: {task}</p>
      <button onClick={() => {onUpdate(id, isCompleted)}}>√</button>
      <button onClick={() => {onDelete(id)}}>X</button>
    </div>
  )
}

export default TaskContainer
