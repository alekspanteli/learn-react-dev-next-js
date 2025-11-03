'use client';

import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Simulate API call
async function addTodoToServer(text: string): Promise<Todo> {
  // Simulate network delay (500ms - 1s)
  await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 500));
  return {
    id: Date.now(),
    text,
    completed: false,
  };
}

export default function TodoListBefore() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React', completed: false },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodoText = input;
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // ⚠️ PROBLEM: User has to wait for server response
      // UI is frozen/unresponsive during this time
      const newTodo = await addTodoToServer(newTodoText);
      setTodos([...todos, newTodo]);
    } catch (err) {
      setError('Failed to add todo');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="border-2 border-red-300 rounded-lg p-4 bg-red-50">
      <h2 className="text-xl font-bold mb-4 text-red-800">
        ❌ Before: Without useOptimistic
      </h2>
      <p className="text-sm text-red-600 mb-4">
        User has to wait 500ms-1s before seeing their todo appear
      </p>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a todo..."
            className="flex-1 px-3 py-2 border rounded"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            {isLoading ? 'Adding...' : 'Add'}
          </button>
        </div>
      </form>

      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

      {isLoading && (
        <p className="text-gray-500 text-sm mb-2">⏳ Waiting for server...</p>
      )}

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-2 bg-white rounded border flex items-center gap-2"
          >
            <span className={todo.completed ? 'line-through text-gray-400' : ''}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>

      {todos.length === 0 && !isLoading && (
        <p className="text-gray-400 text-sm">No todos yet</p>
      )}
    </div>
  );
}
