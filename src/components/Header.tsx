import { ListTodo } from 'lucide-react';

    export default function Header() {
      return (
        <header className="py-6 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg rounded-t-lg flex items-center justify-center">
          <ListTodo className="w-8 h-8 mr-3" />
          <h1 className="text-4xl font-extrabold tracking-tight">
            My Beautiful Todos
          </h1>
        </header>
      );
    }