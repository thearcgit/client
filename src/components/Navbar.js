import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink,useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const logOut =(e)=>{
    e.preventDefault()
    localStorage.clear()
    navigate('/login')
    window.alert(`Logout Successfully`)
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto mb-2 ">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/login" onClick={logOut}>Log Out</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
