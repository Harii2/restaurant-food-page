import React from 'react'
import {FiMail,FiFacebook} from "react-icons/fi"
import {BsWhatsapp} from "react-icons/bs"
import {CiLocationOn} from "react-icons/ci"
import {BsInstagram} from "react-icons/bs"

const Footer = () => {
   
  return (
    <div className='bg-black flex flex-col items-center pt-6 pb-6 text-white'>
        <div>
            <img className='h-[120px] text-white' src = "https://washops.s3.ap-south-1.amazonaws.com/21fe96b949dd864acd3b380da9cd73ee.png" alt='img' />
        </div>
        <div className='bg-white mt-2 w-[350px] text-center text-black'>
            <p>Indoor/Outdoor Seating | Takeaway | Delivery</p>
        </div>
        <h1 className='font-semibold text-xl mt-4'>Average Cost</h1>
        <p className='mt-4 mb-4 text-sm'>INR 2500 for two people(approx)</p>
        <h1 className='font-bold text-xl'>OPENING HOURS</h1>
        <div className='mt-4'>
            <p><span className='mr-6'>Monday</span> : 1:00 PM - 5 PM, 6:00 PM - 1:30 AM</p>
            <p><span className='mr-6'>Tuesday</span> : 1:00 PM - 5 PM, 6:00 PM - 1:30 AM</p>
            <p><span>Wednesday</span> : 1:00 PM - 5 PM, 6:00 PM - 1:30 AM</p>
            <p><span className='mr-4'>Thursday</span> : 1:00 PM - 5 PM, 6:00 PM - 1:30 AM</p>
            <p><span className='mr-9'>Friday</span> : 1:00 PM - 5 PM, 6:00 PM - 1:30 AM</p>
            <p><span className='mr-4'>Saturday</span> : 1:00 PM - 5 PM, 6:00 PM - 1:30 AM</p>
            <p><span className='mr-7'>Sunday</span> : 1:00 PM - 5 PM, 6:00 PM - 1:30 AM</p>
        </div>
        <hr color='white' className='font-bold'/>

        <h1 className='font-bold text-xl mt-6'>CONTACT US</h1>
        <div className='flex gap-2 items-center mt-6'>
            <FiMail color='white' size={24}/>
            <p>info@yazugoa.com</p>
        </div>

        <div className='flex gap-2 items-center mt-6'>
            <BsWhatsapp color='white' size={24}/>
            <p>WhatsApp : +91 7447709662</p>
        </div>

        <div className='flex gap-2 items-center mt-6 '>
            <CiLocationOn color='white' size={24}/>
            <p>Marquis Beach Resort Dando,Candolim,Goa 403515</p>
        </div>

        <h1 className='font-bold text-xl mt-4'>FOLLOW US</h1>

        <div className='flex gap-2 mb-4'>
            <a href="https://www.facebook.com/YazuGoa" target="_blank" rel="noopener noreferrer">
                <FiFacebook size={24}/>
            </a>

            <a href="https://www.instagram.com/yazugoa" target="_blank" rel="noopener noreferrer">
                <BsInstagram size={24}/>
            </a>
        </div>

        <hr color='white' className='text-xl'/>
        <p>@Copyright 2021 Yazu Goa Powered by UppSale Suite</p>
        <img className='w-[80px]' src = "https://washops.s3.ap-south-1.amazonaws.com/7d4eb6f99691269c74a585439838cbd1.png" alt ='fssai'/>
        <p>License Number: 106180010000247</p>
    </div>
  )
}

export default Footer