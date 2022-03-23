import React from "react";
import { useSelector } from "react-redux";
const ProfileComponent=()=>{
   const result= useSelector((state)=>state.user.logininfo)
    return(
       <div>
       <h1>Welcome to the Session !</h1>
       <h2>Your details</h2>
       <h4>Username :{result.username}</h4>
       <h4>Role:{result.role}</h4>
       </div> 
    )
}
export default ProfileComponent