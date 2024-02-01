import {CreateTodo} from './Components/CreateTodo'

import './App.css'
import './index.css'
import { Todos } from './Components/Todos'
import { useState , useEffect} from 'react'



function App() {

  const [todos,setTodos] = useState([]);

  //  fetch("http://localhost:3000/")
  //  .then(async (res) =>{
  //   const json = await res.json();
  //   setTodos(json.todos); 
  //  })
  useEffect(() => {
    // This fetch is inside a useEffect, so it will run when the component mounts
    fetch("http://localhost:3000/")
      .then(async (res) => {
        const json = await res.json();
        console.log(json);
        setTodos(json.todos);
        console.log(json.todos) ;
      })
      .catch(error => console.error('Error fetching todos:', error));
  }, []);
  

  return (
    <div>

      <CreateTodo/>
      <Todos todos={todos}></Todos>
      
    </div>
  )
}

export default App
