import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  ChangeUsername  from './pages/userProfile/changeUsername'
import AccountManagement from './pages/userProfile'
import { Route, Routes } from 'react-router-dom'
import ChangeUserPassword from './pages/userProfile/changePassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/userProfile' element={<AccountManagement/>}></Route>
      <Route path='/change/username' element={<ChangeUsername/>}></Route>
      <Route path='/change/userPassword' element={<ChangeUserPassword/>}></Route>
    </Routes>
    </>
  )
}

export default App
