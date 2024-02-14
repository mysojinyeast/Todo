import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Todo App', () => {
  it('renders the todo application', () => {
    render(<App />);
    const headerElement = screen.getByText(/Manage Your Todos/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<App />);
    
    
    const inputField = screen.getByPlaceholderText('Write Todo...');
    const addButton = screen.getByText(/Add/i);

    
    
    
  });

  
  //it('toggles the completion status of a todo', () => {
    //render(<App />);

    
    //const todoElement = screen.getByText(/Some Todo/i);
    //const checkbox = todoElement.parentElement.querySelector('input[type="checkbox"]');

    
    //fireEvent.click(checkbox);

    
    //expect(checkbox.checked).toBe(true); 
  //});

  
});
