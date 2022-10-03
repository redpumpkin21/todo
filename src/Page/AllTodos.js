import React from "react"

import { useNavigate } from "react-router-dom"
const AllTodo = (props) => {
  console.log("All todos", props)
  const navigate = useNavigate()
    return (
      <div>
          {props.todo.map((todo) => (<ul><h3 className = "title" key={todo._id} onClick={(event) => {
              props.edit(todo)
              navigate("/edit")
          }}>{todo.title}</h3> <p className = "description">{todo.description}</p> 
            <button onClick={(event) =>{
              props.deleteTodo(todo)
              navigate("/")
            }} className= "delete"> Delete</button>
          </ul> ))}
      </div>
            
    )
}

export default AllTodo