import React from 'react'

const Account_details = () => {
  return (
    <div className='w-full lg:w-4/5 lg:mx-auto'>
      <div className='p-5'>
        <h1 className='font-bold text-4xl'>Satya Praksh Tripathi</h1>
        <div className='flex mt-2 text-lg font-semibold'>
          <h3 className='mr-12'>9315358737</h3>
          <h3>satya9604166@gmail.com</h3>
        </div>
      </div>
    <div className=' bg-white flex bg'>
    <div className='h-5/6 w-1/6 m-2 bg-[rgb(240,240,245)] rounded-xl p-2 text-lg'>
        <ul className='bg-slate-300 py-2 '>
            <li className='pb-12 pl-2 text-xl cursor-pointer hover:bg-white font-semibold'>Orders</li>
            <li className='pb-12 pl-2 text-xl cursor-pointer hover:bg-white font-semibold'>Swiggy One</li>
            <li className='pb-12 pl-2 text-xl cursor-pointer hover:bg-white font-semibold'>Favourites</li>
            <li className='pb-12 pl-2 text-xl cursor-pointer hover:bg-white font-semibold'>Payments</li>
            <li className='pb-12 pl-2 text-xl cursor-pointer hover:bg-white font-semibold'>Addresses</li>
            <li className='pb-12 pl-2 text-xl cursor-pointer hover:bg-white font-semibold'>Settings</li>
        </ul>
    </div>
    <div className='flex items-center justify-center h-2/5 w-2/5 m-auto'>
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_262/empty-orders-image_acrbbw"/>
    </div>
    </div>
    </div>

  )
}

export default Account_details;

