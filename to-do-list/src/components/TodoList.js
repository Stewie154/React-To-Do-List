import React from 'react';
//Import Components
import ToDo from './ToDo';

const ToDoList = ({ toDos, setToDos, filteredToDos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredToDos.map(toDo => (
                    <ToDo 
                        text={toDo.text}
                        key={toDo.id}
                        toDos={toDos}
                        setToDos={setToDos}
                        toDo={toDo}  // access to each indivdual element (toDo)
                    />
                ))}
            </ul>
        </div>
    );
};
export default ToDoList;