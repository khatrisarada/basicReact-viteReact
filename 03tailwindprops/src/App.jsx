import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username:"hitesh",
    age:21
  }
  return (
    <>
      {/* <h1 className='bg-green-400 text-black p-4 rounded-xl'>
        Tailwind Background Test
      </h1> */}
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Tailwind Background Test
      </h1>
      <Card username="rohan" btnText="click me"/>
      <Card username="john" />
    </>
  )
}

export default App
