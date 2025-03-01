 import React from "react";
 import "./Login.css";
 import ben from './ben.png.png';
 import { data } from 'react-router-dom';


 const Login = (props) => {


  var userData =[
    {userName:"MK",Password:"111",cart:[]},
    {userName:"AK",Password:"222",cart:[]},
    {userName:"SK",Password:"333",cart:[]}
  ];
 const signup = () => {
   var userName = document.getElementById("userName").value;
   var userPassword = document.getElementById("password").value;
   var activeUserDetail = userData.filter((data)=>{
     return userName == data.userName;
   });
   console.log(activeUserDetail);
   if (activeUserDetail.length > 0){

     if(activeUserDetail[0].password = userPassword){

       localStorage.setItem("userName",activeUserDetail[0].userName);
       window.location.replace("./Home"); 


     } else {
       alert("wrong password");
       
     }
   }
   
 };
   return (
     <div className='backround' >
 
         <div className='ak'>                 
            
           <img className='logo' src={ben} alt=''/>
         <div>
          <p>username</p>
             <input id="userName" placeholder="User  id...." />
            
             </div>
             <div>
             <p>password</p>
             <input id="password" placeholder="Password...." />
             
             </div>
             <button onClick={signup}className="button"id="submit">Login</button>
             </div>
             </div>
   );
 };
 export default Login;