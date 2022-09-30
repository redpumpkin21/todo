import React from "react"
import Todo from "../Compnents/Todo"
import { useNavigate } from "react-router-dom"
const AllTodo = (props) => {
  console.log("All todos", props)
  const navigate = useNavigate()
    return (
      <div>
          {props.todo.map((todo) => (<ul><h3 key={todo._id} onClick={(event) => {
              props.edit(todo)
              navigate("/edit")
          }}>{todo.title}</h3> <p>{todo.description}</p> </ul> ))}
      </div>
            
    )
}

export default AllTodo