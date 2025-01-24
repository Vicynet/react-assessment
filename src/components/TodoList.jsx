import React, { useState, useEffect } from 'react';

const TodoList = () => {
      const [todos, setTodos] = useState(() => {
            const savedTodos = localStorage.getItem('todos');
            return savedTodos ? JSON.parse(savedTodos) : [];
      });
      const [newTodo, setNewTodo] = useState('');

      useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

      const addTodo = () => {
            if (newTodo.trim()) {
                  setTodos([
                        ...todos,
                        { id: Date.now(), text: newTodo, completed: false },
                  ]);
                  setNewTodo('');
            }
      };

      const toggleTodo = (id) => {
            setTodos(
                  todos.map((todo) =>
                        todo.id === id ? { ...todo, completed: !todo.completed } : todo
                  )
            );
      };

      const deleteTodo = (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
      };

      return (
            <div className="space-y-4">
                  <div className="flex">
                        <input
                              value={newTodo}
                              onChange={(e) => setNewTodo(e.target.value)}
                              placeholder="Enter a new task"
                              className="border rounded p-2 w-full mr-2"
                        />
                        <button
                              onClick={addTodo}
                              className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                              Add Todo
                        </button>
                  </div>
                  {todos.map((todo) => (
                        <div
                              key={todo.id}
                              className="flex items-center space-x-2"
                        >
                              <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                              />
                              <span className={todo.completed ? 'line-through' : ''}>
                                    {todo.text}
                              </span>
                              <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                              >
                                    Delete
                              </button>
                        </div>
                  ))}
            </div>
      );
};

export default TodoList;
