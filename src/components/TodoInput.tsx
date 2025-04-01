import React, { useState, KeyboardEvent } from 'react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <input
      className="todo-input"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="What needs to be done?"
    />
  );
};

export default TodoInput; 