import { useState, useEffect } from 'react';
import { Route, Routes, Link, useMatch, useNavigate } from 'react-router-dom';
import './App.css';
import AllTodo from './Page/AllTodos';
import SingleTodo from './Page/singleTodo';
import Form from './Page/Form';
import Home from './Page/Home';
import React from 'react';

function App() {
  const navigate = useNavigate()
  const url = "https://glamorous-newt-sundress.cyclic.app/todo"

  const [todo, setTodo] = useState([])
  const nullTodo = {
    title: "",
    description: "",
  }
  const [targetTodo, setTargetTodo] = useState(nullTodo)
  const getTodo = async() => {
    const response = await fetch(url)
    const data = await response.json()
    setTodo(data)
    console.log('Data', data[0]._id)
  }


const addTodo = async(newTodo) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTodo),
  })
  getTodo()
}

const getTargetTodo = (todo) => {
  setTargetTodo(todo)
  navigate("/edit")
}

const updateTodo = async (todo) => {
  const response = await fetch(url + todo[0]._id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  })
  getTodo()
}
const deleteTodo = async (todo) => {
  console.log('todo._id', todo._id)
  const response = await fetch(url + todo._id + "/", {
    method: "delete",
  })
  getTodo()
  navigate("/")
}
useEffect (() => {getTodo()}, [])

  return (
    <div className="App">
      <header className="App-header">
       <Link to = "/new">
        <button>New Task</button>
       </Link>

        <Routes>

          <Route path = "/" element={
            <AllTodo todo = {todo}/>}>
          </Route>
          <Route path = "/:id" element = {
            <SingleTodo todo = {todo}
              edit = {getTargetTodo}
              deleteTodo = {deleteTodo}
              match = {useMatch("/:id")}

            />}>
          </Route>
          <Route path ="/new" element = {
            <Form initialTodo = {nullTodo}
              handleSubmit = {addTodo}
              buttonLabel = "create Todo"
            />}>
          </Route>
          <Route path = "/edit" element = {
            <Form initialTodo = {targetTodo}
              handleSubmit = {updateTodo}
              buttonLabel = "update Todo"/>
          }>

          </Route>
        </Routes>

      </header>
    </div>
  );
}

export default App;
