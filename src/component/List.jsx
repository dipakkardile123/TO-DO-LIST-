import React, { useState } from 'react'
import "./Todo.css"

const List = () => {
const [inp,setinp]=useState("")
const[todos,settodos]=useState([])

const addtodo=()=>{
    if(inp.trim()!==""){
        const newtodo={
            id:new Date().getTime(),
            text:inp,
        }
        settodos([...todos,newtodo]);
        setinp("");
    }
}
const deletetodo=(id)=>{
    const updatetodo=todos.filter((todo)=>todo.id !==id);
    settodos(updatetodo);
}
const editmode=()=>{
    
}


  return (
    <div className='maindiv'>
        <div className='subdiv'>
        <h2>TO DO APP</h2>
        <input type="text"placeholder='add a value....' value={inp} onChange={(e)=>setinp(e.target.value)}/>
        <button onClick={addtodo}>ADD</button>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={()=>deletetodo(todo.id)}>Delete</button>
                    <button onClick={()=>editmode(todo.id,todo.text)}>Edit</button>
                    </li>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default List