import React, { useState } from 'react';
import { Todo, FilterType } from './types/todo';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoFilters from './components/TodoFilters';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="app">
      <h1>todos</h1>
      <div className="todo-container">
        <TodoInput onAdd={addTodo} />
        <TodoList todos={filteredTodos} onToggle={toggleTodo} />
        <div className="todo-footer">
          <span>{activeTodosCount} items left</span>
          <TodoFilters filter={filter} onFilterChange={setFilter} />
          <button onClick={clearCompleted}>Clear completed</button>
        </div>
      </div>
    </div>
  );
}

export default App; 