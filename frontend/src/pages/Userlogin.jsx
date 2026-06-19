import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Userlogin=()=>
{
    const[email,setEmail]=useState('');{/*this is used to store the value of email input field and setEmail is used to update the value of email input field*/}
    const[password,setPassword]=useState('');{/*this is used to store the value of password input field and setPassword is used to update the value of password input field*/}
    const[userData,setUserData]=useState({});{/*this is used to store the value of user data and setUserData is used to update the value of user data*/}
    const submitHandler=(e)=>
    {
        e.preventDefault();{/*this is used to prevent the default behavior of the form which is to reload the page*/}
         setUserData({
            email: email,
             password: password});{/*this is used to update the value of user data with the value of email and password input fields*/}
        console.log(userData);{/*this is used to log the value of user data*/}
        setEmail('');{/*this is used to clear the value of email input field*/}
        setPassword('');{/*this is used to clear the value of password input field*/}
    }
    return(
        <div className='p-7 h-screen flex flex-col justify-between'>
           <div>
              <img className='w-16 mb-10'src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"></img>
         <form onSubmit={(e)=>{submitHandler(e)}}>
            <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
            <input 
                required 
                className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                type="email" 
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input 
                required 
                className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
                type="password" 
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
         </form>
         <p className='text-center'>New here?<Link to="/signup" className='text-blue-600 hover:underline'>Create new Account</Link></p>  
           </div>
           <div>
            <Link to="/captain-login" className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base' 
            >Sign in as Captain</Link>
           </div>
            
        </div>
    )
}

export default Userlogin;