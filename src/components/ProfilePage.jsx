import React from 'react'
import "./ProfilePage.css"
import UserDetails from "../UserDetails.json"

function ProfilePage() {
  return (
    <div className='container'>
       <div className="subcontainer">
           <img className='pfp' src={UserDetails.profile} alt="" /> 
           <div className='details'>
                <h2>Name :</h2>
                <p>{UserDetails.name}</p>
                <h2>Email :</h2>
                <p>{UserDetails.email}</p>

           </div>
        </div> 
    </div>
  )
}

export default ProfilePage