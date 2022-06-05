import Box from './Box';
import { useState } from 'react'
import './App.css';


function App() {
const [arr,setArr]=useState([])
  return (
    <div >
      <Box arr={arr} />
      <button onClick={() => {
        setArr([...arr,arr.length])
      }}>
        点击+1
      </button>
    </div>
  );
}

export default App;
