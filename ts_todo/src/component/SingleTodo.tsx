import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './model'
import {AiFillEdit,AiFillDelete,AiOutlineFileDone} from 'react-icons/ai'
import "./styles.css";

type Props = {
  todo:Todo
  todos:Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


export const SingleTodo = ({todo,todos,setTodos}:Props) => {

  const [edit,setEdit] = useState<boolean>(false)
  const [editTodo,setEditTodo] = useState<string>(todo.todo)

  const inputRef = useRef<HTMLInputElement>(null)
        useEffect(()=>{
       inputRef.current?.focus();
      },[edit])

  const handleEdit = (e:React.FormEvent,id:number) =>{
    e.preventDefault();
    setTodos(todos.map((todo)=>(
      todo.id === id ? {...todo,todo:editTodo}:todo
    )))
    setEdit(false)
    }


  const handleDone = (id:number) =>{
    setTodos(
      todos.map((todo)=>
      todo.id=== id ?{...todo, isDone:!todo.isDone }:todo))
  }
  
  const handleDelete = (id:number) =>{
        setTodos(todos.filter((todo)=>todo.id !== id))
  }
  

  return (
    <form className='todos__single' onSubmit= {(e) => handleEdit(e,todo.id)}>
       
       {  edit ? (
                <input
                ref = {inputRef} 
                value={editTodo}
                onChange = {(e)=>setEditTodo(e.target.value)}
                />
          ):(
            todo.isDone ? (
              <s className="todos__single--text">{todo.todo}</s>
             ):(
              <span className="todos__single--text">{todo.todo}</span>
             )
          )
       }
        <div>
          <span className="icons" 
          onClick={()=>{
            if(!edit && !todo.isDone){
                setEdit(!edit)
            }
          }}>
            <AiFillEdit/>
          </span>
          <span className="icons" onClick={()=>handleDelete(todo.id)}>
            <AiFillDelete/>
          </span>
          <span className="icons" onClick={()=>handleDone(todo.id)}>
            <AiOutlineFileDone/>
          </span>
        </div>
    </form>
  )
}
