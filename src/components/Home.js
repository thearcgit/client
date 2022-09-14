import React, { useState,useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import Navbar from './Navbar.js'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate()

  const [loginCheck,setLoginCheck]=useState()
  const [users, setUsers] = useState([])

  
  const userList = async(e) => {
    // e.preventDefault()
    console.log('heloo')
    
    try {
      let x = {
        method:'GET',
        header:{
          'Accept': 'application/json',
          'Content-type' : 'application/json',
          "Authorization":`Bearer ${loginCheck}`
        },
        // credentials:"include",
        
      }
      const data = await axios('http://localhost:5000/getUsers',x)     
      
      console.log(data)
      if(data.data.status === 200){
        console.log(data.data.users)
        setUsers(data.data.users)

      }
    } catch (error) {
      console.log('list error',error)
      
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    setLoginCheck(token)
    if(!token){
      navigate('/login')
    }    
  },[setLoginCheck]) 
  return (
    <>
      <Navbar />
      {/* <div className="signup-content">
        <h1>Welcome</h1>

      </div> */}
      {/* <h1>{data.name}</h1> */}
      <div className="signup-content user-list">
        <div className="form-button user">

          <input type="submit" value='User List' onClick={userList} />
          
        </div>
      </div>
        {
          users.map(user => {
           return <div>{user.name}</div>
          }
          )
        }
      
    </>
  )
}

export default Home
