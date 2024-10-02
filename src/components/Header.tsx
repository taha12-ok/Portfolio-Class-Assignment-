import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
    <div className='header '>
        <ul className='header-button'>
           <Link href={"/"}>
            <li>Home</li>
            </Link>
            <Link href={"/about"}>
            <li>About</li>
            </Link>
            <Link href={"/contact"}>
            <li>Contact Us</li>
            </Link> 
        </ul>
    </div>
     
    </>
  )
}

export default Header