import React from 'react';
    import { Todo } from '../types';
    import TodoItem from './TodoItem';

    interface TodoListProps {
      todos: Todo[];
      onToggle: (id: string) => void;
      onDelete: (id: string) => void;
      onEdit: (id: string, newText: string) => void;
    }

    export default function TodoList({
      todos,
      onToggle,
      onDelete,
      onEdit,
    }: TodoListProps) {
      if (todos.length === 0) {
        return (
          <p className="text-center text-gray-500 text-lg mt-8 py-12 bg-white rounded-lg shadow-inner">
            No tasks yet! Add a new one above.
          </p>
        );
      }

      return (
        <ul className="space-y-4 mt-8">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      );
    }