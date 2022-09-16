import React from "react"
import Todo from "../Compnents/Todo"

const AllTodo = (props) => {
  console.log("All todos", props)
    return (
            props.todo.map((todo) => <Todo todo={todo} key = {todo._id}/>)
    )
}

export default AllTodo