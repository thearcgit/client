import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import List from './components/List'
import {Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <>

    {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/list' element={<List />} /> */}
        

      </Routes>
      
    </>
  )
}

export default App

