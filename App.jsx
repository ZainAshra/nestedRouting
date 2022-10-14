import { useState } from 'react'
import './App.css'
import MyRoute from './config/route';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>appjsx</h1>
<MyRoute/>

    </div>
  )
}

export default App
