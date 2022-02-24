import { Header } from './components/Header';
import './_app.scss';
import { FormTodo } from './components/FormTodo';
import { AllTask } from './components/AllTask';
import { TodosContext } from './components/context/TodosContext';
import { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([])
  return (
    <>
    <Header />
    <div className='container'>
      <TodosContext.Provider value={{todos, setTodos}}>
        <FormTodo />
        <AllTask />
      </TodosContext.Provider>
    </div>
    </>
  );
}

export default App;
