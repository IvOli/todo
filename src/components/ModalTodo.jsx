import React, { useContext } from 'react'
import { TodosContext } from './context/TodosContext'
import { useForm } from './hooks/useForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        toast.success("The task was successfully edited");
    }else{
      toast.error("Please fill the following form");
    }
        
   }
  return (
    
      <form className='form modal' onSubmit={writeTask}>
        <div className='modal__container'>
                <label>Are you sure to edit?</label>
                <input 
                  className='form__input modal__input' 
                  type='text' 
                  name='editTopic' 
                  placeholder={`you editing ${topic}`}
                  value={editTopic} 
                  onChange={handleInputChange} 
                  maxLength='50'
                />
                <textarea 
                  className='form__textarea modal__textarea' 
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
        <ToastContainer />
      </form>
    
  )
}
