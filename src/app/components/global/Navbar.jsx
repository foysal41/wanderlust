'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/app/assets/Wanderlast.png"
import { authClient } from '@/app/lib/auth-client'
import { Avatar } from "@heroui/react";

export default function Navbar() {

   const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 

    const user = session?.user


    const handleSignOut = async()=> {
      await authClient.signOut();
    }

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
           {
    
            user ? <div className='flex items-center gap-2'>
               <li><Link href={"/profile"}>Profile</Link></li>
              <li>  <Avatar><Avatar.Image referrerPolicy='no-referrer' alt='jhon' src={user?.image}></Avatar.Image></Avatar></li>        
              <li><button onClick={handleSignOut} variant="danger" className='text-red-600 cursor-pointer'>Logout</button></li>
            </div> : <div className='flex items-center gap-2'>
             <li><Link href={"/login"}>Login</Link></li>
             <li><Link href={"/signup"}>Sign Up </Link></li>
            </div>
           }
        </ul>
    </div>
  )
}


     
          
