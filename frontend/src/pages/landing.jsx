import React from 'react';
import "../App.css";
import { Link,useNavigate } from 'react-router-dom';



export default function LandingPage(){

   const router = useNavigate();

return(
    <div className='landingPageContainer'>
       <nav>
          <div className='navHeader'>
            <h2>Apna Video call</h2>
          </div>
          <div className='navlist'>

             <p  onClick={()=>{
               router("/auth")
             }} >Join as Guest</p>

             <p onClick={()=>{
               router("/auth")
             }}>Register</p>

             <div role='button'>
               <p  onClick={()=>{
               router("/auth")
             }}>Login</p></div>
          </div>
       </nav>

       <div className='landingMainContainer'>
         <div>
            <h1><span style={{color:"orange"}}>Connect</span> with your loved ones</h1>
            <p>Cover a distance by Apna Video call</p>
            <div role='button'>
                <Link to={"/auth"}>Get started</Link>
            </div>
         </div>
         <div><img src="/mobile.jpeg" alt="mobile_image" /></div>
       </div>

    </div>
)
}

