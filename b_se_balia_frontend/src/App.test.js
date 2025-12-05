import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site branding', () => {
  render(<App />);
  const brand = screen.getByText(/B se Balia/i);
  expect(brand).toBeInTheDocument();
});
