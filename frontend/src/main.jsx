import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'//BrowserRouter comes from React Router DOM  and it enables client-side routing in React...so that user changes pages and component without refreshing the entire website
    //We wrap App inside BrowserRouter because BrowserRouter provides routing context to all child components. It enables client-side navigation and allows components like Routes, Route, Link, and useNavigate to work without reloading the page

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
       <BrowserRouter> 
     <App />
    </BrowserRouter>
    </UserContext>
    
    
  </StrictMode>
)
