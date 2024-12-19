import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
<div className=' w-full flex justify-between items-center  font-semibold'>
    <div className=' flex items-center gap-2'>
        <div className=' cursor-pointer bg-black p-2 rounded-full' >
        <img onClick={ ()=>navigate(-1)} className=' w-5    ' src={assets.arrow_left} alt="" />
        </div>
       
       <div className=' cursor-pointer bg-black p-2 rounded-full '>
       <img onClick={ ()=>navigate(1)} className=' w-5  ' src={assets.arrow_right} alt="" />
       </div>
       

    </div>
    
<div className=' flex items-center gap-3'>
    <button className=' bg-white text-black px-5 py-1 rounded-full hidden md:block'>Explore Premium</button>
    <button  className=' bg-black text-white px-5 py-1 rounded-full hidden md:block'>Install App</button>
<p className=' bg-purple-700 text-white w-8 h-8 rounded-full items-center justify-center flex cursor-pointer'>R</p>
</div>


</div>
<div className=' flex items-center gap-2 mt-4'>
  <p className=' px-4 py-1 rounded-2xl bg-white text-black cursor-pointer'>All</p>
  <p className=' px-4 py-1 rounded-2xl bg-black text-white cursor-pointer'>Music</p>
  <p className=' px-4 py-1 rounded-2xl bg-black text-white cursor-pointer'>Podcasts</p>
</div>

    </>
  )
}

export default Navbar