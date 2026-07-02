import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {CaptainDataContext} from '../context/CaptainContext.jsx'
import { useContext } from 'react'

const captainlogin=()=>
{
 const [email,setEmail]=useState('');{/*this is used to store the value of email input field and setEmail is used to update the value of email input field*/}
 const [password,setPassword]=useState('');{/*this is used to store the value of password input field and setPassword is used to update the value of password input field*/}
 const {captain,setCaptain}=useContext(CaptainDataContext);

 const navigate=useNavigate();{/*this is used to navigate to different pages in the application*/}
 const submitHandler=async (e)=>
 {
    e.preventDefault();{/*this is used to prevent the default behavior of the form which is to reload the page*/}
    const captain={
        email: email,
        password: password};{/*this is used to update the value of user data with the value of email and password input fields*/}

        const response=await axios.post('http://localhost:4000/captains/login',captain);{/*this is used to send a post request to the server with the value of user data*/}


        if(response.status===200)
        {
            const data=response.data;
            setCaptain(data.captain);{/*this is used to update the value of user data with the value of user data received from the server*/}
            localStorage.setItem('token',data.token);{/*this is used to store the value of token data in the local storage so that it can be accessed even after the page is refreshed*/}
            navigate('/captain-home');{/*this is used to navigate to the home page after successful login*/}
        }

        setEmail('');{/*this is used to clear the value of email input field*/}
        setPassword('');{/*this is used to clear the value of password input field*/}
 }
    return(
        <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required type="password"
            placeholder='password'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Login</button>

        </form>
        <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
      </div>
      <div>
        <Link
          to='/login'
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as User</Link>
      </div>
    </div>
    )
}

export default captainlogin;