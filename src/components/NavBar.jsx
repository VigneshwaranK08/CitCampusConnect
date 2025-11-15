import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center p-2 h-14 w-full bg-lightGray'>
      <img className="w-16 " src="/assests/appLogo.svg" alt="AppLogo" />
      <h1 className='mx-4 text-darkBlue'>Campus Connects</h1>
      <div className="">
        <ul>
          <li><a href="#"><img src="/assests/house.svg" alt="" /></a></li>
          <li><a href="#"><img src="/assests/newspaper.svg" alt="" /></a></li>
          <li><a href="#"><img src="/assests/plus.svg" alt="" /></a></li>
          <li><a href="#"><img src="/assests/comment.svg" alt="" /></a></li>
          <li><a href="#"><img src="/assests/user.svg" alt="" /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar