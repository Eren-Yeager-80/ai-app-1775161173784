import React, { useState, useEffect } from 'react';
    import { Todo } from './types';
    import Header from './components/Header';
    import TodoForm from './components/TodoForm';
    import TodoList from './components/TodoList';

    // A subtle background image from Unsplash
    const BACKGROUND_IMAGE_URL = 'https://images.unsplash.com/photo-1547481119-947b19b7d8b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


    export default function App() {
      const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
      });

      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

      const addTodo = (text: string) => {
        const newTodo: Todo = {
          id: String(Date.now()), // Simple unique ID
          text,
          completed: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
      };

      const toggleTodo = (id: string) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };

      const deleteTodo = (id: string) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      };

      const editTodo = (id: string, newText: string) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
        );
      };

      return (
        <div
          className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 md:p-8"
          style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
        >
          <div className="bg-white/95 backdrop-blur-sm w-full max-w-2xl mx-auto rounded-lg shadow-xl p-6 md:p-8">
            <Header />
            <TodoForm onAddTodo={addTodo} />
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          </div>
        </div>
      );
    }