import {createContext,useState} from 'react'

export const CaptainDataContext=createContext();

const CaptainContext=({children})=>
{
    const [Captain,setCaptain]=useState(null);
    
    return(
        <CaptainDataContext.Provider value={vaue}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext;
