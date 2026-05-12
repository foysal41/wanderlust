import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/app/assets/Wanderlast.png"

export default function Navbar() {
  return (
    <div className='flex justify-between items-center gap-4 p-5 bg-white'>
        <ul className='flex justify-between items-center gap-2'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/destination"}>Destination</Link></li>
             <li><Link href={"/add-destination"}>Add Destination </Link></li>
        </ul>


        <div>
            <Image src={logo} alt='Logo'></Image>
        </div>

         <ul className='flex justify-between items-center gap-2'>
            <li><Link href={"/profile"}>Profile</Link></li>
            <li><Link href={"/login"}>Login</Link></li>
             <li><Link href={"/signup"}>Sign Up </Link></li>
        </ul>
    </div>
  )
}
