import { render, screen } from '@testing-library/react';
import App from './App';

test('Test first test case', () => {
  render(<App />);
  const text = screen.getByText(/First React test case/i);
  const text2 = screen.getByText("Abhilash");
  const title=screen.getByTitle("AI generated image")
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});

test('Testing Input box',()=>{
  render(<App/>);
  let inputBox=screen.getByRole("textbox");
  let inputPlaceholder=screen.getByPlaceholderText("Enter User Name");
  expect(inputBox).toBeInTheDocument();
  expect(inputPlaceholder).toBeInTheDocument();
  expect(inputBox).toHaveAttribute("name","username");
  expect(inputBox).toHaveAttribute("id","userId");
  expect(inputBox).toHaveAttribute("type","text");
  expect(inputBox).toHaveAttribute("value","Abhilash");
})