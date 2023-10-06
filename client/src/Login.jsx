import React, { useState } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [Email,setEmail] = useState("")
    const [Password,setPassword]=useState("")
    const navigate = useNavigate()
    axios.defaults.withCredentials=true;
    const handleSubmit = (e) =>{
       e.preventDefault();
       axios.post("http://localhost:6000/login",{Email,Password})
       .then(result=>{
        console.log(result)
        if(result.data==="success"){
        navigate('/home')
       }
    })
       .catch(err=>console.log(err))
  }
  return (
    <div className='login template d-flex justify-content-center align-item-center w-40 vh-100  bg-primary'>
    <div className='form_container mt-5 mb-5 p-5 rounded bg-white'>
       <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className='mb-2'>
            <label htmlFor="email">Email:</label>
            <input type="email"
             placeholder='Enter Email'
               className='form-control'
                onChange={(e)=>setEmail(e.target.value)}
               />
        </div>
        <div className='mb-2'>
            <label htmlFor="password">Password:</label>
            <input type="password"
             placeholder='Enter Password'
               className='form-control'
               onChange={(e)=>setPassword(e.target.value)}
               />
        </div>
        <div className='mb-2'>
            <input type="checkbox" className='custom-control cutom-checkbox' id='check'/>
            <label htmlFor="check" className='custom-input-label ms-2'>
            Remember me
            </label>
        </div>
        <div className='d-grid'>
         <button className='btn btn-primary'>Sign In</button>
        </div>
         <p className='text-end mt-2'>
            Forgot <Link to='/register' className='text-decoration-none'>Password?</Link><Link to='/register'  className='ms-2 text-decoration-none'>Sign up</Link>
         </p>
       </form>
    </div>
    </div>
    
  )
}

export default Login
