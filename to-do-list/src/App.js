import React, { useState, useEffect } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import ToDoList from './components/TodoList';

function App() {
  //initialising states
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredToDos, setFilteredToDos] = useState([]);

  //useEffect, runs once when app starts to get locally stored toDos.
  useEffect(() => {
    getLocalToDos();
  },[]);

  //useEffect. Runs a function (first argument, arrow function) every time the second argument (piece(s) of state) changes.
  useEffect(() => {
    filterHandler();
    saveToDos();
  }, [toDos, status]);

  //functions
  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredToDos(toDos.filter(toDo => toDo.completed === true));
        break;
      case "uncompleted":
        setFilteredToDos(toDos.filter(toDo => toDo.completed === false));
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  }

  //save to local storage
  const saveToDos = () => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  };

  const getLocalToDos = () => {
    if (localStorage.getItem('toDos') === null) {
      localStorage.setItem('toDos', JSON.stringify([]));
    } else {
      let locallyStoredToDos = JSON.parse(localStorage.getItem('toDos'))
      //console.log(locallyStoredToDos); (checked if info was stored after refreshing, it was)
      setToDos(locallyStoredToDos);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Stewart's To-Do List</h1>
      </header>
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        toDos={toDos}
        setToDos={setToDos}
        setStatus={setStatus}
      />
      <ToDoList 
        toDos={toDos}
        setToDos={setToDos}
        filteredToDos={filteredToDos}
      />
    </div>
  );
}

export default App;
