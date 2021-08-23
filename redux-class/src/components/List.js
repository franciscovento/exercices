import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {deleteTodoACtion } from '../redux/actions'
const List = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
  return (
    <div>
      {todos.map(todo=> {
          return (
              <div key={todo.id}>
                  <p>{todo.name} {todo.complete && 'complete'} </p>
                  <button onClick={()=> dispatch(deleteTodoACtion(todo.id))}>
                      Delete
                  </button>

              </div>
          )
      })}
    </div>
  )
}

export default List
