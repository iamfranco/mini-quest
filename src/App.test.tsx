import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import App from './App';

describe('App component', () => {
  beforeEach(() => {
    render(<App />)
  })
  
  it('should render heading of Vite + React', () => {
    expect(screen.getByRole('heading', {
      name: 'Vite + React'
    })).toBeTruthy();
  })

  it('button should have initial text of count is 0', () => {
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('count is 0');
  })

  it('When user clicks button once, Then button should have text of count is 1', async () => {
    // Arrange
    const user = userEvent.setup();
    const button = screen.getByRole('button');

    // Act
    await user.click(button);

    // Assert
    expect(button.textContent).toBe('count is 1');
  })

  it('When user clicks button n-times, Then button should have text of count is n', async () => {
    // Arrange
    const user = userEvent.setup();
    const button = screen.getByRole('button');
    const n = 5;

    // Act
    for (var i=0; i<n; i++) {
      await user.click(button);
    }

    // Assert
    expect(button.textContent).toBe(`count is ${n}`);
  })
})