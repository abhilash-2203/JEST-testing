import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData]=useState("") ;

  return (
    <div className="App">
      {/* click event  */}
      <h1>Test Click event with Button</h1>
      <button onClick={()=>setData("Updated successfully")}>Update Data</button>
      <h1>{data}</h1>
     

      {/* change event  */}
      {/* <h1>Test Onchange event with input text</h1>
      <input type='text' value={data} onChange={(e)=>setData(e.target.value+"test")}/> */}

       {/* <p>First React Test Case</p>
     <p>Abhilash</p>
      <input type="text" placeholder='Enter User Name' 
      name='username' id="userId"
      value="Abhilash"
      />
      <br/>
      <br />
      <br />
       <img title="AI generated image" src="https://img.freepik.com/free-photo/fantasy-style-scene-with-mountains-landscape_23-2151124734.jpg?t=st=1732879282~exp=1732882882~hmac=2e352a4f769a4a104331b12ba33008f41e6f6adb4905b0f99abbcbcda45ad17f" /> */}
    </div>
  );
}

export default App;
