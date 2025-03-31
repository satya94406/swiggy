import React from 'react'
import { LOGO_URL } from '../Utils/constants'
const Footer = () => {
  return (
    <div className=' m-4 grid grid-cols-3 lg:grid-cols-5 bg-slate-200 '>
      <div>
        <img className="w-36 h-12 mx-2" alt="sat" src={LOGO_URL} />
        <span className='ml-3'>© 2025 Swiggy Limited</span>
      </div>
      <div>
         <h1 className='font-bold my-2'>Company</h1>
         <ul>
            <li className='my-2'>About Us</li>
            <li className='my-2'>Swiggy Corporate</li>
            <li className='my-2'>Carrers</li>
            <li className='my-2'>Teams</li>
            <li className='my-2'>Swiggy One</li>
            <li className='my-2'>Swiggy Instamart</li>
            <li className='my-2'>Swiggy Dineout</li>
            <li className='my-2'>Swiggy Genie</li>
            <li className='my-2'>Minis</li>
            <li className='my-2'>Pyng</li>
         </ul>
      </div>

      <div>
         <h1 className='font-bold my-2'>Contact Us</h1>
         <ul>
            <li className='my-2'>Help & Support</li>
            <li className='my-2'>Partner with us</li>
            <li className='my-2'>Ride with us</li>
         </ul>
      </div>
      
      <div>
         <h1 className='font-bold my-2'>Legal</h1>
         <ul>
            <li className='my-2'>Terms & Conditions</li>
            <li className='my-2'>Cookie Policy</li>
            <li className='my-2'>Privacy Policy</li>
            <li className='my-2'>Investor Relations</li>
         </ul>
      </div>

      <div>
         <h1 className='font-bold my-2'>Available in:</h1>
         <ul>
            <li className='my-2'>Banglore</li>
            <li className='my-2'>Gurgaon</li>
            <li className='my-2'>Hyderabad</li>
            <li className='my-2'>Delhi</li>
            <li className='my-2'>Mumbai</li>
            <li className='my-2'>Noida</li>
            <li className='my-2'>Greator Noida</li>
            <li className='my-2'>Pune</li>
         </ul>
      </div>

      <div>
         <h1 className='font-bold my-2'>Life at Swiggy</h1>
         <ul>
            <li className='my-2'>Explore with Swiggy</li>
            <li className='my-2'>Swiggy News</li>
            <li className='my-2'>Snackables</li>
         </ul>
      </div>

      <div>
         <h1 className='font-bold my-2'>Social Links</h1>
         <ul>
            <li className='my-2'>About Us</li>
         </ul>
      </div>
      
    </div>
  )
}

export default Footer