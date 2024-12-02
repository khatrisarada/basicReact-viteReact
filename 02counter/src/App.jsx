import  { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setcounter] = useState(15)

  //let counter =15

  const addValue =() =>{
    
    //counter = counter +1
    //console.log("value added", Math.random())
    setcounter(counter+1)
  }
    const removeValue =() =>{
      setcounter(counter-1)
    }
  return (
    <>
     
      <h1> react</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick ={addValue}>Add value</button>
      <br />
      <button
      onClick ={removeValue}> Remove value</button>
      
    </>
  )
}

export default App
