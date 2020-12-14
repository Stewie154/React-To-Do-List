import React, { useState } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import ToDoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);
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
      />
      <ToDoList 
        toDos={toDos}
        setToDos={setToDos}
      />
    </div>
  );
}

export default App;
