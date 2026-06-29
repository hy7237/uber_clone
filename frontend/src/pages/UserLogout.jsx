import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

 const UserLogout=()=>
{
    const token=localStorage.getItem('token');//this is used to get the value of token data from the local storage so that it can be accessed even after the page is refreshed
    const navigate=useNavigate();

    axios.get('http://localhost:4000/users/logout',{headers:{Authorization:`Bearer ${token}`}})//this is used to send a get request to the server with the value of token data in the headers
    .then((response)=>
    {
        if(response.status===200){//if response status is 200 then remove the token data from the local storage and navigate to the login page
        localStorage.removeItem('token');//this is used to remove the token data from the local storage
        navigate('/login');//this is used to navigate to the login page
        }
    })
    .catch((error)=>
    {
        console.error('Error logging out:', error);
    });
    return (
        <div>User Logout</div>
    )
}
export default UserLogout