import React,{useState} from 'react'
import { NavLink,useNavigate} from 'react-router-dom'
import axios from 'axios'


const Login = () => {
    const navigate = useNavigate()


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const loginUser =async (e) => {
        e.preventDefault()

        

        const response = await fetch('http://localhost:5000/signin',{
            headers:{
                'content-type' : 'application/json'
            },
            method:'POST',
            body:JSON.stringify({ email, password })
        })

        const data = await response.json()

        if(data.status === 422 || !data ){
            window.alert(`Invalid Login Credentials`)
        }else{
            localStorage.setItem("token",data.token)
            navigate('/')
            window.alert(`Login Succesfull`)

        }
    }

   

  return (
    <>
      <section className='login'>
            <div className="contaitner mt-5">
                <div className="login-content">
                    <div className="login-form">
                        <h2 className='form-title'>Sign In</h2>
                        <form className='register-form'>
                            
                            <div className="form-group">
                                <label htmlFor="name">Email:</label><br />
                                <input type="text" name='email' id='email' autoComplete='off'
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                                placeholder='Your Email' />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="name">Password:</label><br />
                                <input type="password" name='password' id='password' autoComplete='off'
                                value={password} 
                                onChange={e => setPassword(e.target.value)}
                                placeholder='Your Password' />
                            </div>
                            
                            <div className="form-group form-button">
                                <input type="submit" name='login' className='form-submit'
                                onClick={loginUser}
                                value='Log In' />
                            </div>
                            <div className="signup-link">
                              <NavLink to='/register' className='register-link'>Create an account</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>

    
      
    </>
  )
}

export default Login
