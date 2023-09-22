import logo from './logo.svg';
import './App.css';
import React from 'react'
function App(){
   const [status,setStatus]=React.useState(true)
   return(
      <div className="App">
      {
         status? <h1>Welcome to react App!</h1>:null
      }
      <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Hide</button>
      </div>
   );
}

export default App;