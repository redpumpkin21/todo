import { Link } from "react"
import { useParams } from "react-router-dom"
const SingleTodo = ({todo, match, edit, deleteTodo}) => {
    // const id = parseInt(match.params.id)
    // const todos = todo.find((todo) => todo.id === id)
    //  const id= parseInt(match.params.id)
    // const todome = todo.find((todo) => todome.id === id)
  
    

      const {id} = useParams()    
      const todome = todo.find((p) => p.id === id)
   // const todome = todo.find(({id}) => id === parseInt(todo.target.id))
     console.log(todome)
    console.log("hey")
    console.log(todo)
    console.log(todo._id)
    return(
        <div>
            <h3>{todome?.title}</h3>
            <p>{todome?.description}</p>
            
            <button onClick={(event) => edit(todome)}>Edit</button>
            <button onClick={(event) => deleteTodo(todome)}>Delete</button> 
            
        </div>
    )
}

export default SingleTodo