import React from 'react'
import { useContext,useEffect } from 'react'
import { UserDataContext } from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper=({children})=>
{
   // const {user}=useContext(UserDataContext);//this is used to get the value of user data from the context but if user refresh the page then user data will be lost because context is not persistent so we need to check if user data is present or not if not then we need to redirect to login page
   const token=localStorage.getItem('token');//this is used to get the value of token data from the local storage so that it can be accessed even after the page is refreshed
    const navigate=useNavigate();
    useEffect(()=>
    {
        if(!token)//if token is not present then navigate to login page
        {
            navigate('/login');
        }
    },[token])
    
   return(
    <>{children}</>
   )
}
export default UserProtectWrapper