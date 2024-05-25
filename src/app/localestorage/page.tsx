'use client'
import React, { useState, useEffect } from 'react';
// Define the constant TODOS outside the components
const TODOS: { id: number, title: string, description: string }[] = [
    { id: 1, title: 'Learn React', description: 'Learn the basics of React.' },
    { id: 2, title: 'Practice Coding', description: 'Solve problems on coding platforms.' },
    { id: 3, title: 'Read a Book', description: 'Read a book on software development.' },
  ];
  
  // TodoListLocalStorage Component
  
  interface Todo {
    id: number;
    title: string;
    description: string;
  }
  
  const TodoListLocalStorage: React.FC = () => {
    // this component should be load after main component load in browser to avoid window / localstorage is not defined error
    const localTodos = localStorage?.getItem('todos') || '[]';

    const [todos, setTodos] = useState<Todo[]>(JSON.parse(localTodos));
  
    // useEffect(() => {
    //   const savedTodos = localStorage.getItem('todos');
    //   if (savedTodos) {
    //     setTodos(JSON.parse(savedTodos));
    //   } else {
    //     localStorage.setItem('todos', JSON.stringify(TODOS));
    //     setTodos(TODOS);
    //   }
    // }, []);
  
    return (
      <main className="flex min-h-screen flex-col items-center">

        <h1>Todo List</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
      </main>
    );
  };
  
  export default TodoListLocalStorage;
  