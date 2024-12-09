import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

// test('Testt first test case', () => {
//   render(<App />);
//   const text = screen.getByText(/First React test case/i);
//   const text2 = screen.getByText("Abhilash");
//   const title=screen.getByTitle("AI generated image")
//   expect(text).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
//   expect(text2).toBeInTheDocument();
// });
 
// test('Testing Input box',()=>{
//   render(<App/>);
//   let inputBox=screen.getByRole("textbox");
//   let inputPlaceholder=screen.getByPlaceholderText("Enter User Name");
//   expect(inputBox).toBeInTheDocument();
//   expect(inputPlaceholder).toBeInTheDocument();
//   expect(inputBox).toHaveAttribute("name","username");
//   expect(inputBox).toHaveAttribute("id","userId");
//   expect(inputBox).toHaveAttribute("type","text");
//   expect(inputBox).toHaveAttribute("value","Abhilash");
// })

// describe("UI test cases group",()=>{
//   test("testt case 1",()=>{
//      render(<App/>) 
//      let inputBox=screen.getByRole("textbox");
//      expect(inputBox).toHaveAttribute("name","username")
//   })
//   test("testt case 2",()=>{
//     render(<App/>) 
//     let inputBox=screen.getByRole("textbox");
//     expect(inputBox).toHaveAttribute("name","username")
//  })
//  test("testt case 3",()=>{
//   render(<App/>) 
//   let inputBox=screen.getByRole("textbox");
//   expect(inputBox).toHaveAttribute("name","username")
// })
// })

// //Group

// describe("API test cases group",()=>{
//   test("api test case 1",()=>{
//      render(<App/>) 
//      let inputBox=screen.getByRole("textbox");
//      expect(inputBox).toHaveAttribute("name","username")
//   })
//   test("api test case 2",()=>{
//     render(<App/>) 
//     let inputBox=screen.getByRole("textbox");
//     expect(inputBox).toHaveAttribute("name","username")
//  })
//  test("api test case 3",()=>{
//   render(<App/>) 
//   let inputBox=screen.getByRole("textbox");
//   expect(inputBox).toHaveAttribute("name","username")
// })
// //  nested group 
// describe("Inner describe test group",()=>{
//   test("inner test case 4",()=>{
//     render(<App/>) 
//     let inputBox=screen.getByRole("textbox");
//     expect(inputBox).toHaveAttribute("name","username")
//  })
// })
 
// })

// Onchange Events

// test("onchange event testing",()=>{
//   render(<App/>)
//   let input=screen.getByRole("textbox");
//   fireEvent.change(input,{target:{value:'a'}});
//   expect(input.value).toBe("atest")
// })

// CLick event test

test("click event test",()=>{
  render(<App/>)
  let btn=screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Updated successfully")).toBeInTheDocument();
})