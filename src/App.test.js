import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Backbone Cabal Page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Backbone Cabal/i);
  expect(linkElement).toBeInTheDocument();
});
