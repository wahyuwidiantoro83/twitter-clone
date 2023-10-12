import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChangeUsername } from './pages/userProfile/changeUsername'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChangeUsername/>
    </>
  )
}

export default App
