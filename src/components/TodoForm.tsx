import React, { useState } from 'react';
    import { Plus } from 'lucide-react';

    interface TodoFormProps {
      onAddTodo: (text: string) => void;
    }

    export default function TodoForm({ onAddTodo }: TodoFormProps) {
      const [newTodo, setNewTodo] = useState('');

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodo.trim()) {
          onAddTodo(newTodo.trim());
          setNewTodo('');
        }
      };

      return (
        <form onSubmit={handleSubmit} className="flex mt-8 gap-3">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            type="submit"
            className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center"
          >
            <Plus className="w-5 h-5 mr-2" /> Add Task
          </button>
        </form>
      );
    }