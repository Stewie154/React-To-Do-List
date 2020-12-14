import React from 'react';

const Form = ({ inputText, setInputText, toDos, setToDos }) => {

    //Here I can write JavaScript code and functions
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
        
    };

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setToDos([
            ...toDos, {
                text: inputText,
                completed: false, 
                id: Math.random() * 1000
            }
        ]);
        setInputText('');
    }

    return(
        <form>
            <input 
                type="text" 
                value={inputText}
                className="todo-input" 
                onChange={inputTextHandler}    
            />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
             <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
    </form>
    );
}
export default Form;