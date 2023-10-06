import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
function App() {
  return (

    <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
