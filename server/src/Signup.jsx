
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './style.css'
function Signup() {
  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:6000/register", { Firstname, Lastname, Email, Password })
      .then(result => {
        console.log(result)
        navigate('/login')
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='signup template d-flex justify-content-center align-item-center vh-100  bg-primary'>
      <div className='form_container mt-5 mb-5 p-5 rounded bg-white'>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Sign Up</h3>
          <div className='mb-2'>
            <label htmlFor="fname">Firstname:</label>
            <input type="text"
              placeholder='Enter Firstname'
              className='form-control'
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="lname">Lastname:</label>
            <input type="text"
              placeholder='Enter Lastname'
              className='form-control'
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email:</label>
            <input type="email"
              placeholder='Enter Email'
              className='form-control'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="password">Password:</label>
            <input type="password"
              placeholder='Enter Password'
              className='form-control'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='d-grid'>
            <button className='btn btn-primary'>Sign Up</button>
          </div>
          <p className='text-end mt-2'>
            Already Have An Account
            <Link to='/Login' style={{textDecoration:"none"}} className="ms-2">Sign In</Link>
          </p>
        </form>
      </div>
    </div>

  )
}
export default Signup