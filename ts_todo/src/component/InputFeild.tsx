import React from 'react'
import "./styles.css";

interface props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}
const InputFeild: React.FC<props> = ({todo,setTodo,handleAdd}:props) => {
  return (
 <form className="input" onSubmit={handleAdd}>
   <input type="input"
    className="input__box"
    placeholder="Enter your task"
    value={todo}
    onChange={(e)=>setTodo(e.target.value)}/>
   <button className="input_submit" type="submit">Go</button>
 </form>
  )
}

export default InputFeild
