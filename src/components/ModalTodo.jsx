import React, { useContext } from 'react'
import { TodosContext } from './context/TodosContext'
import { useForm } from './hooks/useForm'
import './_modal.scss'
import './_form.scss'

export const ModalTodo = ({todoId, topic, setEdit}) => {
  const {todos, setTodos} = useContext(TodosContext)
  const [ { editTopic, editTask }, handleInputChange, reset ] = useForm({
    editTopic: '', editTask: ''
})
   const writeTask= (e) => {
    e.preventDefault()

    if(editTopic.length >2 && editTask.length >2){
      const todoIndex = todos.findIndex(todo => todo.id === todoId);
        const newTodos = [...todos];
        newTodos[todoIndex].topic = editTopic
        newTodos[todoIndex].task = editTask
        setTodos(newTodos);
        setEdit(false)
    }
        
   }
  return (
    
      <form className='form modal' onSubmit={writeTask}>
        <div className='modal__container'>
                <label>Are you sure to edit?</label>
                <input 
                  type='text' 
                  name='editTopic' 
                  placeholder={`you editing ${topic}`}
                  value={editTopic} 
                  onChange={handleInputChange} 
                  maxLength='50'
                />
                <textarea  
                  name='editTask'
                  value={editTask} 
                  placeholder='Edit content...' 
                  maxLength='75' 
                  onChange={handleInputChange}
                />
                <div className='modal__button'>
                    <button className='modal__button--cancel' onClick={()=>{setEdit(false)}}>Cancel</button>
                    <button className='modal__button--confirm'>Confirm</button>
                </div>
        </div>
      </form>
    
  )
}
