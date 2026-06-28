import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Start from './pages/Start.jsx'
import Userlogin from './pages/Userlogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
import Captainlogin from './pages/Captainlogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import Home from './pages/Home.jsx'

const App=()=>
{
    return(      //javscript has a rule called Automatic Semicolan insertion..so when there is no statement in the same line of return than it injects semicolan and return nothing..so always return the anything from the same line of return like here(return()
    
        <div>
            <Routes>
                <Route path='/' element={<Start/>}/>
                <Route path='/login' element={<Userlogin/>}/>
                 <Route path='/signup' element={<UserSignup/>}/>
                <Route path='/captain-login' element={<Captainlogin/>}/>
                 <Route path='/captain-signup' element={<CaptainSignup/>}/>
                 <Route path='/home' element={<Home/>}/>

            </Routes>
        </div>
    );
}

export default App;



