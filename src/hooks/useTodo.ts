import { useState } from "react";

const useTodo = () => {
    const [todos, setTodos] = useState(['ngoding', 'belajar']);
    const [newTodo, setNewTodo] = useState('');

    const deleteTodo = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    const addTodo = (todo: string) => {
        if (todo.trim() === '') {
            return;
        }
        setTodos([...todos, todo]);
        setNewTodo('');
    }

    const editTodo = (index: number, todo: string) => {
        const newTodos = todos.map((t, i) => i === index ? todo : t);
        setTodos(newTodos);
    }

    return { todos, deleteTodo, addTodo, editTodo, newTodo, setNewTodo };
}

export default useTodo;
