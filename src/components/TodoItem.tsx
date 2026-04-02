import React, { useState } from 'react';
    import { CheckCircle, Circle, Edit, Trash2, Save, X } from 'lucide-react';
    import { Todo } from '../types';

    interface TodoItemProps {
      todo: Todo;
      onToggle: (id: string) => void;
      onDelete: (id: string) => void;
      onEdit: (id: string, newText: string) => void;
    }

    export default function TodoItem({
      todo,
      onToggle,
      onDelete,
      onEdit,
    }: TodoItemProps) {
      const [isEditing, setIsEditing] = useState(false);
      const [editText, setEditText] = useState(todo.text);

      const handleEditSave = () => {
        if (editText.trim() && editText.trim() !== todo.text) {
          onEdit(todo.id, editText.trim());
        }
        setIsEditing(false);
      };

      const handleEditCancel = () => {
        setEditText(todo.text);
        setIsEditing(false);
      };

      return (
        <li className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm transition-all duration-200 hover:shadow-md">
          <div className="flex items-center flex-grow">
            <button
              onClick={() => onToggle(todo.id)}
              className={`mr-4 p-1 rounded-full ${
                todo.completed
                  ? 'text-green-500 hover:text-green-600'
                  : 'text-gray-400 hover:text-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-colors duration-200`}
              aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
            >
              {todo.completed ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <Circle className="w-6 h-6" />
              )}
            </button>
            {isEditing ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleEditSave();
                  if (e.key === 'Escape') handleEditCancel();
                }}
                className="flex-grow p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                autoFocus
              />
            ) : (
              <span
                className={`text-lg flex-grow ${
                  todo.completed ? 'line-through text-gray-500 italic' : 'text-gray-800'
                }`}
              >
                {todo.text}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2 ml-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleEditSave}
                  className="p-2 text-green-600 hover:text-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 transition-colors duration-200"
                  aria-label="Save changes"
                >
                  <Save className="w-5 h-5" />
                </button>
                <button
                  onClick={handleEditCancel}
                  className="p-2 text-red-600 hover:text-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300 transition-colors duration-200"
                  aria-label="Cancel editing"
                >
                  <X className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 text-blue-600 hover:text-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-colors duration-200"
                  aria-label="Edit task"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onDelete(todo.id)}
                  className="p-2 text-red-600 hover:text-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300 transition-colors duration-200"
                  aria-label="Delete task"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </li>
      );
    }