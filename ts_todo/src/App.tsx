import React, { useState } from 'react';
import InputFeild from './component/InputFeild';
import TodoList  from './component/TodoList';
import {Todo} from './component/model'
import './App.css';


const App:React.FC = ()=>{
  
  const [todo,setTodo] = useState<string>('');
  const [todos,setTodos] = useState<Todo[]>([]);

  
  
  const handleAdd = (e: React.FormEvent) =>{
       e.preventDefault();
       if(todo){
         setTodos([...todos,{id:Date.now(), todo,isDone:false}])
         setTodo("")
        }
  }
  console.log(todos);
  
  return ( 
    <div className="App">
      <span className="heading">Task It</span>
      <InputFeild todo={todo} setTodo = {setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
   );
}

export default App;
