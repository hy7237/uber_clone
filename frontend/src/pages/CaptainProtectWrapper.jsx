import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper=({children})=>
{
    const token=localStorage.getItem('token');//this is used to get the value of token data from the local storage so that it can be accessed even after the page is refreshed
    const navigate=useNavigate();
    const {captain,setCaptain}=useContext(CaptainDataContext);
    //const [isloading,setIsLoading]=useState(true);

    useEffect(()=>
    {
        if(!token)//if token is not present then navigate to login page
        {
            navigate('/captain-login');
        }
    },[token])

   /* if(isloading)
    {
        return(
            <div>Loading...</div>
        )
    }*/

    return(
        <>
        {children}
        </>
    )
}
export default CaptainProtectWrapper