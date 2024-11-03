import List from '@mui/material/List';
import TodoItem from './TodoItem';
import { useState } from 'react';
import TodoForm from './TodoForm';

const initialTodos = [
    { id: 1, text: 'walk the dog', completed: false },
    { id: 2, text: 'walk the cat', completed: false },
    { id: 3, text: 'walk the mouse', completed: true },
    { id: 4, text: 'walk the dfish', completed: false },
]
export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos)

    const removeTodo = (id) => {
        setTodos((prev) => {
            return prev.filter((t) => t.id !== id)
        })
    
    }
    const toggleTodo = (id) => {
        setTodos((prev) => {
            return prev.map((todo) => {
                if(todo.id === id){
                    return {...todo,completed: !todo.completed}
                }else{
                    return todo;
                }
            })
        })
    }
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <TodoItem  todo={todo} key={todo.id} toggle = {() => toggleTodo(todo.id)} removeTodo = {() => removeTodo(todo.id)}/>

            ))}
            <TodoForm />
        </List>
    ) 
}