import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheckDouble } from '@fortawesome/free-solid-svg-icons'

function TaskContainer({isCompleted, student, task, id, onDelete, onUpdate, taskCompleted}) {

  const trashButton = <FontAwesomeIcon icon={faTrash} size="2x" className='trashButtton' />
  const checkButton = <FontAwesomeIcon icon={faCheckDouble} size="2x" className='checkButtton' />

  return (
    <div className='taskContainerElement'>
      <div>
      <div>
      {isCompleted ? <h5 className='TaskCompleted'>Completed</h5>: <h5 className='taskPending' >In process</h5> }
      </div>
      <div className='taskContainerElement__content'>
        <div>
        <p>Estudiante: {student}</p>
        <p>Tarea: {task}</p>
        </div>
        <div className='taskContainerElement__content__buttonsContainer'>
        <button onClick={() => {onUpdate(taskCompleted)}}> {checkButton}</button>
        <button onClick={() => {onDelete(id)}}>{trashButton} </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TaskContainer
