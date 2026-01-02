import React from 'react'
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import UserDetails from "../UserDetails.json"
import "./ProfilePage.css"

function ProfilePage({ user }) {

  if (!user) return null;

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className='container'>
       <div className="subcontainer">
           <img className='pfp' src={user.photoURL} alt="" /> 
           <div className='details'>
                <h2>Name :</h2>
                <p>{user.displayName}</p>
                <h2>Email :</h2>
                <p>{user.email}</p>
                <button onClick={handleLogout}>Sign Out </button>
           </div>
        </div> 
    </div>
  )
}

export default ProfilePage