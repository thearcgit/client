import React,{useState,useEffect} from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
// import axios from 'axios'

const Signup = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        name:'', email:'', phone:'', password:'', cpassword:''
    })

    const handleInputs = (e) => {
        

        setUser({...user, [e.target.name]:e.target.value})

    }

    const postData =async (e) => {
        e.preventDefault()

        const {name, email, phone, password, cpassword} = user

        const response = await fetch('http://localhost:5000/register',{
            headers:{
                'content-type' : 'application/json'
            },
            // credentials:'include',
            method:'POST',
            body:JSON.stringify({
                name, email, phone, password, cpassword
            })
        })

        const data = await response.json()
        console.log(data)

        if(data.status === 422 || !data ){
            window.alert('Invalid Registration')
            console.log('Invalid Registration')
        }else if(password !== cpassword){
            window.alert(`Password and Confirm Password should be same`)
        }
        else{
            window.alert('Registration Succesfull')
            console.log('Registration Succesfull')
            navigate('/login')

        }
    }


  return (
    <>
        <section className='signup'>
            <div className="contaitner mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className='form-title'>Sign Up</h2>
                        <form className='register-form' method='POST'>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label><br />
                                <input type="text" name='name' id='name' autoComplete='off'
                                value={user.name}
                                onChange={handleInputs}
                                placeholder='Your Name' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Email:</label><br />
                                <input type="text" name='email' id='email' autoComplete='off'
                                value={user.email}
                                onChange={handleInputs}
                                placeholder='Your Email' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Phone:</label><br />
                                <input type="number" name='phone' id='phone' pattern='[0-9]{10}' autoComplete='off'
                                value={user.phone}
                                onChange={handleInputs}
                                placeholder='Your Phone' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Password:</label><br />
                                <input type="password" name='password' id='password' autoComplete='off'
                                value={user.password}
                                onChange={handleInputs}
                                placeholder='Your Password' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Confirm Password:</label><br />
                                <input type="password" name='cpassword' id='cpassword' autoComplete='off'
                                value={user.cpassword}
                                onChange={handleInputs}
                                placeholder='Confirm Your Password' />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name='signup' className='form-submit'
                                onClick={postData}
                                value='Register'/>
                            </div>
                            <div className="login-link">
                              <NavLink to='/login' className='signin-link'>Already have an account ?</NavLink>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </section>
    
      
    </>
  )
}

export default Signup
