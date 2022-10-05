import React from "react"
import { useState } from "react"
import { useNavigate, useLocation, useParams } from "react-router-dom"



const Form = ({initialTodo, handleSubmit, buttonLabel, history, props}) => {
    const [formData, setFormData] = useState(initialTodo)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const navigate = useNavigate()
    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        navigate("/")
     }
    return(
        <div className = "form">

        <h1></h1>
        <form onSubmit = {handleSubmission}>
            <input
                type = "text"
                onChange = {handleChange}
                value = {formData.name}
                name = "title"
                placeholder = "Enter Task"
                className = "newTodo"
            />
            <input
                type = "text"
                onChange = {handleChange}
                value = {formData.description}
                name = "description"
                placeholder = "Describe the Task"
                className = "newTodo"
            />

            <input type = "submit" value = {buttonLabel} />

        </form>
        </div>
    )
}

export default Form