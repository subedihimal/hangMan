import React, { useState } from 'react';
import './App.css'
import Button from './components/Button'
import TextInput from './components/TextInput';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TextInput/>
      <Button text = "Submit"  onClickHandler = {()=>{console.log("Button Clicked")}}/>    
    </>
  )
}

export default App
