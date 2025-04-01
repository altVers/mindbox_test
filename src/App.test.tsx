import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Todo App', () => {
  test('добавление новой задачи', () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Новая задача' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(screen.getByText('Новая задача')).toBeInTheDocument();
    expect(screen.getByText('1 items left')).toBeInTheDocument();
  });

  test('переключение состояния задачи', () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Тестовая задача' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(screen.getByText('0 items left')).toBeInTheDocument();
  });
}); 