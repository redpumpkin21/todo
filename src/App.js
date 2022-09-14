import { useState, useEffect } from 'react';
import './App.css';

function App(props) {
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
  }

useEffect (() => {getTodo()}, [])

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
  props.history.push("/edit")
}

const updateTodo = async (todo) => {
  const responce = await fetch(url + todo.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  })
  getTodo()
}

const deleteTodo = async (todo) => {
  const response = await fetch(url + todo.id + "/", {
    method: "delete",
  })
  getTodo()
  props.history.push("/")
}
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hey</h1>
      </header>
    </div>
  );
}

export default App;
