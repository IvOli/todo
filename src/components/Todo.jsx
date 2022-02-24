import React, { useState } from 'react'
import { ModalTodo } from './ModalTodo'
import './_todo.scss'

export const Todo = ({topic, task, done, todoId, doneTodo, deleteTodo}) => {
  const [edit, setEdit] = useState(false)


  const editTodo = (e) => {
    e.preventDefault()
    setEdit(!edit)
    
  }
  return (
    <div className='todo'>
        
        <div className='todo__container'>
          <div className='todo__container__line'></div>
          <div className={!done ?  'todo__container__line red' : 'todo__container__line green'}></div>
          <div>
            <h3 className={!done ?  null : "done"}>{topic}</h3>
            <p className={!done ?  null : "done"}>{task}</p>
          </div>
          
        </div>
        <div className='todo__buttons'>
          <button className='todo__button red' onClick={() => deleteTodo(todoId)}></button>
          <button className='todo__button yellow' onClick={editTodo}></button>
          <button className='todo__button green' onClick={() => doneTodo(todoId)}></button>
        </div>
        
        
        {edit && <ModalTodo todoId={todoId} topic={topic} setEdit={setEdit}/>}
        
    </div>
  )
}
