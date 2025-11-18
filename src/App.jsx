import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (task.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTask('');
    alert('Task added successfully!');
  };

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1>My To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
