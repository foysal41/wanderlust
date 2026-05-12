import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { LuMapPin } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";



export default function DestinationCard({destination}) {
    const {_id, imageUrl, price , destinationName ,duration ,country} = destination
  return (
    <div className='border'>
        <Image src={imageUrl} alt={destinationName} height={400} width={400}></Image>
        <div className='px-2 py-3'>
            <div className='flex items-center justify-between  gap-1'>
                <div className='flex items-center  gap-1'>
                    <LuMapPin /> <span>{country}</span>
                </div>
                <h4 className='text-xl font-bold'>${price}</h4>
            </div>



            <div className='text-xl font-bold'><h2>{destinationName}</h2> </div>
            <div className='flex items-center  gap-1'> <SlCalender /> <span>{duration}</span>  </div>
        </div>
        <div className='px-2 py-3'>
           <Link href={`/destination/${_id}`}><button className='px-2 bg-blue-400 rounded-full  cursor-pointer text-white'>Book Now</button></Link>

        </div>
    </div>
  )
}
