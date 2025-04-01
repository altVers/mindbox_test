import React from 'react';
import { FilterType } from '../types/todo';

interface TodoFiltersProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const TodoFilters: React.FC<TodoFiltersProps> = ({ filter, onFilterChange }) => {
  return (
    <div className="filters">
      <button 
        className={filter === 'all' ? 'active' : ''} 
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button 
        className={filter === 'active' ? 'active' : ''} 
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button 
        className={filter === 'completed' ? 'active' : ''} 
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilters; 