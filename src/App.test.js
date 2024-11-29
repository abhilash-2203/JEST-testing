import { render, screen } from '@testing-library/react';
import App from './App';

test('Test first React case', () => {
  render(<App />);
  const text = screen.getByText(/First React test case/i);
  const text2 = screen.getByText("Abhilash");
  const title=screen.getByTitle("AI generated image")
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});

