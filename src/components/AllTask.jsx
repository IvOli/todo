import React, { useContext, useEffect, useState } from 'react'
import { TodosContext } from './context/TodosContext'
import { Todo } from './Todo'
import './_tasks.scss'
export const AllTask = () => {
  const {todos, setTodos} = useContext(TodosContext)
  const [todosFilter, setTodosFilter] = useState([])
  const [todosAll, setTodosAll] = useState(true)
  
  const doneTodo = (id) =>{
    const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].done = !newTodos[todoIndex].done;
        setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id != id))
  }

  const handleChange = (e) =>{
    e.preventDefault();
    setTodosAll(!todosAll)
}

useEffect(() => {
  setTodosFilter(todos.filter( todo => todo.done === true))
}, [todos])

  return (
    <div className='tasks'>
        <h2>All Tasks</h2>
        <div className='tasks__selector'>
          <select className={'tasks__select'} onChange={handleChange}>
            <option value='false'>All Tasks</option>
            <option value='true'>Done Tasks</option>
          </select>
          <button onClick={() => setTodos([])}>Clear All</button>
        </div>
        <div className='tasks__container'>
          {todos.length == 0 ? <p>You don´t have any task to do</p> : null}
            {
              todosAll ? todos.map(todo=><Todo key={todo.id} topic={todo.topic} task={todo.task} done={todo.done} todoId={todo.id} doneTodo={doneTodo} deleteTodo={deleteTodo} />) :
              todosFilter.map(todo=><Todo key={todo.id} topic={todo.topic} task={todo.task} done={todo.done} todoId={todo.id} doneTodo={doneTodo} deleteTodo={deleteTodo} />)
            }
        </div>
    </div>
  )
}
