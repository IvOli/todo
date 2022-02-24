import React, { useContext, useState } from 'react'
import { TodosContext } from './context/TodosContext'
import { useForm } from './hooks/useForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './_form.scss'

export const FormTodo = () => {
  const [id, setId] = useState(1)  
  const {todos, setTodos} = useContext(TodosContext)
  const [ { topic, task }, handleInputChange, reset ] = useForm({
    topic: '', task: ''
})
  
  const writeTask= (e) => {
    e.preventDefault()

    if(topic.length >2 && task.length >2){
      setTodos([{id: id, topic: topic, task: task , done: false}, ...todos])
      setId(id + 1)
      reset()
    }else{
      toast.error("Please fill the following form");
    }
    
  }

  return (
    <div className='form'>
      <div className='form__title'>
        <h2>Make New Task</h2>
      </div>
        
        <form className='form__todo' onSubmit={writeTask}>
            <div className='form__contador'>{topic.length}/50</div>
            <input 
              type='text' 
              name='topic' 
              placeholder='your task topic' 
              value={topic}
              onChange={handleInputChange} 
              maxLength='50'
            />
            <div className='form__contador'>{task.length}/75</div>
            <textarea  
              name='task'
              value={task} 
              placeholder='more info about task' 
              maxLength='75' 
              onChange={handleInputChange}
            />
            <button>Create New Task</button>
            <ToastContainer />
        </form>
    </div>
  )
}
