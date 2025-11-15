import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='NavBar'>
      <img className="w-16" src="../../public/assests/appLogo.svg" alt="AppLogo" />
      <h1 className='text-darkBlue'>Campus Connects</h1>
      <div className="links">
        <ul>
          <li><img src="../../public/assests/house.svg" alt="" /></li>
          <li><img src="../../public/assests/newspaper.svg" alt="" /></li>
          <li><img src="../../public/assests/plus.svg" alt="" /></li>
          <li><img src="../../public/assests/comment.svg" alt="" /></li>
          <li><img src="../../public/assests/user.svg" alt="" /></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar