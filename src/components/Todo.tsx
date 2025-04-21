import React, { useRef } from 'react';
import useTodo from '../hooks/useTodo';

const Todo = () => {
    const { todos, newTodo, deleteTodo, addTodo, setNewTodo } = useTodo();
    // contoh pakai useRef
    // const inputRef = useRef<HTMLInputElement>(null);

    // const handleAddTodo = () => { 
    //     const value = inputRef.current?.value;              
    //     if (value) {
    //         addTodo(value);
    //         if (inputRef.current) {
    //             inputRef.current.value = "";
    //         }
    //     }
    // }

    return (
        <>
            {/* //length of the todo list */}
            <div style={{ backgroundColor: 'green', color: 'white', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <h1>Todo List</h1>
            </div>

            {/* add a new todo item */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <input
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        marginRight: '10px'
                    }}
                    type="text"
                    placeholder="Add a new todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    //ref={inputRef}
                />
                <button 
                    style={{ 
                        paddingInline: '50px', 
                        borderRadius: '5px', 
                        border: '1px solid #ccc', 
                        backgroundColor: 'green', 
                        color: 'white' 
                        }}  
                    // onClick={handleAddTodo}
                    onClick={() => addTodo(newTodo)}>Add
                </button>
            </div>

            {/* jumlah todo list */}
            {todos.length > 0 && <h3>Amount of todos: {todos.length}</h3>}

            {/* map through the todo list and display the todo items */}
            <div>
                {todos.length > 0 ? todos.map((todo, index) => (
                    <ol style={{ listStyleType: 'none' }} key={index}>
                        <li>
                            <span>{todo}</span>
                            <button style={{ marginLeft: '10px' }} onClick={() => deleteTodo(index)}>Done</button>
                        </li>
                    </ol>
                )) : <h4>No todos</h4>}
            </div>
        </>

    )
}

export default Todo;
