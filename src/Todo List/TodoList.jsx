import React, { useState } from 'react'
import "./style.css"
const TodoList = () => {

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([])
    const [checked, setChecked] = useState({});

    const addNote = () => {
        setTodos((prev) => ([...prev, {id: Date.now(), text: inputText}]))
        setInputText('');
    }

    const deleteNote = (todoId) => {
        setTodos((prev) => prev.filter((note) => note.id != todoId));
        setChecked((prev) => {
            let newState = {...prev};
            delete newState[todoId];
            return newState;
        })
    }

    const markNote = (e, todoId) => {
        setChecked((prev) => ({...prev, [todoId] : e.target.checked}))
    }

    console.log(checked);
    
    return (
        <div className='container'>
            <h1>Todo List</h1>

            <div >
                <input type="text" value={inputText} onChange={(e)=> setInputText(e.target.value)}/>
                <button onClick={addNote}>Add</button>
            </div>

            <div className='todos'>
                {
                    todos.map((todo, index) => (
                        <div className='todo' key={todo.id}>
                            <label style={{textDecoration: checked[todo.id] == true ? "line-through" : "none"}}>
                                <input type="checkbox" checked={checked[todo.id] || false} onChange={(e) => markNote(e, todo.id)} placeholder='Add Todo'/>
                                {todo.text}
                            </label>
                            <button onClick={() => deleteNote(todo.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList