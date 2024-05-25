'use client'
import React, { useEffect, useState } from 'react';
// Define the constant TODOS outside the components
const TODOS: { id: number, title: string, description: string }[] = [
    { id: 1, title: 'Learn React', description: 'Learn the basics of React.' },
    { id: 2, title: 'Practice Coding', description: 'Solve problems on coding platforms.' },
    { id: 3, title: 'Read a Book', description: 'Read a book on software development.' },
  ];
  
  // TodoList Component
import type { TodoDetailProps, TodoEditorProps, Todo } from '@/types/todoTypes';
  
  const TodoList: React.FC = () => {
    const [selectedTodo, setSelectedTodo] = useState<number>(1);
  
    const selectTodo = (todoId: Todo['id']) => {
      setSelectedTodo(todoId);
    };
  
    return (
        <main className="flex min-h-screen flex-col items-center">
        <h1 className='text-xl'>Todo List</h1>
        <ul className='flex flex-col gap-2 text-black max-w-96 w-full'>
          {TODOS.map((todo) => (
            <li key={todo.id} onClick={() => selectTodo(todo.id)} className='bg-white px-4 rounded-md cursor-pointer'>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
            </li>
          ))}
        </ul>
        <SelectedTodo key={selectedTodo} todoId={selectedTodo} />
        <TodoEditor todoId={selectedTodo} />
      </main >
    );
  };
  
  export default TodoList;
  
  
  const SelectedTodo = ({ todoId }:  { todoId: number}) => {
    // correct way to use the state
    // const todo = TODOS.find((todo) => todo.id === todoId);
    // const [selectedTodo, setTodo] = useState<Todo | undefined>(todo);

    const [selectedTodo, setTodo] = useState<Todo | undefined>(undefined);
    useEffect(() => {
        const todo = TODOS.find((todo) => todo.id === todoId);
        setTodo(todo);
    }, [todoId]);
    
    return (
      <div className='flex flex-col gap-2 mt-10 w-full max-w-96 text-white'>
        <h2>{selectedTodo?.title}</h2>
        <p>{selectedTodo?.description}</p>
      </div>
    );
  }
  // TodoEditor Component
  

  const TodoEditor: React.FC<TodoEditorProps> = ({ todoId }) => {
    const [title, setTitle] = useState<string | undefined>("");
    const [description, setDescription] = useState<string>("");
  
    useEffect(() => {
        const todo = TODOS.find((todo) => todo.id === todoId);
        setTitle(todo.title);
        setDescription(todo.description);
    }, [todoId]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };
  
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
    };
  
    const handleSave = () => {
      // Update the TODOS array or call an API to save the changes
      console.log(`Todo updated: { id: ${todoId}, title: ${title}, description: ${description} }`);
    };
    
    return (
      <div className='flex flex-col gap-2 text-black w-full max-w-96'>
        <h2>Edit Todo</h2>
        <input type="text" value={title} onChange={handleTitleChange}  placeholder=''  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        <textarea value={description} onChange={handleDescriptionChange}  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        <button
        type="button"
        onClick={handleSave}
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
      </div>
    );
  };
  
  