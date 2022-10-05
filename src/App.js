import { useState, useEffect } from 'react';
import { Route, Routes, Link, useMatch, useNavigate } from 'react-router-dom';
import './App.css';
import AllTodo from './Page/AllTodos';
import Form from './Page/Form';
import Home from './Page/Home';
import Navar from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  const navigate = useNavigate()
  const url = "https://glamorous-newt-sundress.cyclic.app/todo/"

  const [todos, setTodos] = useState([])
  const nullTodo = {
    title: "",
    description: "",
  }
  const [targetTodo, setTargetTodo] = useState(nullTodo)
  const getTodos = async() => {
    const response = await fetch(url)
    const data = await response.json()
    setTodos(data)
    console.log('Data', data[0]._id)
  }
console.log("test", todos)
const addTodo = async(newTodo) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTodo),
  })
  getTodos()
}


 useEffect (() => {getTodos()}, [])

const getTargetTodo = (todo) => {
  setTargetTodo(todo)
  navigate("/edit")
}

const updateTodo = async (todo) => {
  const response = await fetch(url + todo._id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  })
  getTodos()
}
const deleteTodo = async (todo) => {  
  const response = await fetch(url + todo._id + "/", {
    method: "delete",
  })
  getTodos()
  navigate("/")
}


  return (
    <div className="App">
      <header className="App-header">
      
      <Navar />
      <Link to = "/new">
        <button>New Task</button>
      </Link>
        
        <Routes>

          <Route path = "/" element={
            <AllTodo todo = {todos}
              edit = {getTargetTodo}
              deleteTodo = {deleteTodo}
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
        <Footer />
      </header>
    </div>
  );
}

export default App;
