import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useContext } from 'react'
import { UserDataContext } from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Userlogin=()=>
{
    const[email,setEmail]=useState('');{/*this is used to store the value of email input field and setEmail is used to update the value of email input field*/}
    const[password,setPassword]=useState('');{/*this is used to store the value of password input field and setPassword is used to update the value of password input field*/}
    const[userData,setUserData]=useState({});{/*this is used to store the value of user data and setUserData is used to update the value of user data*/}

    const {user,setUser}=useContext(UserDataContext);{/*this is used to get the value of user data from the context and setUser is used to update the value of user data in the context*/}
    const navigate=useNavigate();{/*this is used to navigate to different routes*/}

    const submitHandler=async (e)=>
    {
        e.preventDefault();{/*this is used to prevent the default behavior of the form which is to reload the page*/}
         const userData={
            email: email,
             password: password};{/*this is used to update the value of user data with the value of email and password input fields*/}
        console.log(userData);{/*this is used to log the value of user data*/}

        const response= await axios.post('http://localhost:4000/users/login',userData);{/*this is used to send a post request to the server with the value of user data*/}
        if(response.status===200)
        {
            const data=response.data;{/*this is used to get the value of response data*/}
            setUser(data.user);{/*this is used to update the value of user data in the context with the value of response data*/}
            localStorage.setItem('token',data.token);{/*this is used to store the value of token data in the local storage so that it can be accessed even after the page is refreshed*/}
            navigate('/home');{/*this is used to navigate to the home page*/}
        }
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