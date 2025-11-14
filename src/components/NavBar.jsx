import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='NavBar'>
      <img src="../../public/assests/appLogo.svg" alt="AppLogo" height="64px" />
      <h1 className='HeadLine'>Campus Connects</h1>
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