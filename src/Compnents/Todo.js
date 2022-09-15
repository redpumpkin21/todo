import React from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
const Todo= ({todo}) => {
    
    return(
        <div>
           <h3>{todo.title}</h3>
           <p>{todo.description}</p>
           <h1>{todo._id}</h1>
           <p>sd</p>
           <Link to = "/:id">
                <button> single here</button>
           </Link>          
        </div>
    )
}

export default Todo