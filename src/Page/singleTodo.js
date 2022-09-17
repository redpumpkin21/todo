import React from "react"
import { Link } from "react"
import { useParams } from "react-router-dom"
const SingleTodo = ({todo, match, edit, deleteTodo}) => {
     const id = parseInt(match.params.id)
     const todos = todo.find((todo) => todo.id === id)
//     //  const id= parseInt(match.params.id)
//     // const todome = todo.find((todo) => todome.id === id)
//     


//       const {id} = useParams()
//       const todome = todo.find((p) => p.id === id)
//   //  const todome = todo.find(({id}) => id === parseInt(todo.target.id))
     return(
         <div>
             <h3>{todos?.title}</h3>
             <p>{todos?.description}</p>

//             <button onClick={(event) => edit(todos)}>Edit</button>
//             <button onClick={(event) => deleteTodo(todos)}>Delete</button>

//         </div>
     )
 }

 export default SingleTodo