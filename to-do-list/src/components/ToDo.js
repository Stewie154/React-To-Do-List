import React from 'react';

const ToDo = ({ text, toDos, toDo, setToDos }) => {
    //Event Handlers

    const deleteHandler = () => {
        //console.log(toDo) console logs the toDo that we're on

        // finds element that matches toDo from the state, then filters it out
        setToDos(toDos.filter(element => element.id !== toDo.id));
    };

    const completeHandler = () => {
        setToDos(toDos.map(item => {
            if(item.id === toDo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${toDo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>

        </div>
    );
};

export default ToDo;