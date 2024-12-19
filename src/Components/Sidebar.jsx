import React from 'react'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className=' h-full w-[25%] gap-2 p-2 text-white flex-col hidden lg:flex'>
        <div className=' h-[15%] bg-[#121212] rounded flex flex-col pl-8 p-2 justify-around'>
            <div className=' flex items-center cursor-pointer gap-3 '>
                <img className=' w-6' src={assets.home_icon} alt="" />
                <p className=' font-bold'>Home</p>
            </div>
            <div className=' flex items-center cursor-pointer gap-3 '>
                <img className=' w-6' src={assets.search_icon} alt="" />
                <p className=' font-bold'>Search</p>
            </div>

        </div>

        <div className=' h-[85%] bg-[#121212] rounded'>
            <div className=' p-4 flex items-center justify-between  '>
                <div className=' flex items-center gap-3 cursor-pointer'>
                    <img className=' w-8' src={assets.stack_icon} alt="" />
                    <p className=' font-semibold'>Your Library</p>

                </div>
                <div>
                    <img className=' w-5 cursor-pointer' src={assets.plus_icon} alt="" />
                </div>

            </div>

<div className=' p-4 bg-[#242424] m-4 flex flex-col items-start justify-start gap-2 rounded text-white'>
<h1 className=' font-bold'>Create your first playlist</h1>
<p className=' font-light'>It's easy, we'll help you</p>
<button className=' px-5 py-1.5 rounded-full bg-white text-black font-bold mt-2'>Create playlist</button>

</div>
<div className=' p-4 bg-[#242424] m-4 flex flex-col items-start justify-start gap-2 rounded mt-2 text-white'>
<h1 className=' font-bold'>Let's find some podcasts to follow</h1>
<p className=' font-light'>We'll keep you updated on new episodes</p>
<button className=' px-5 py-1.5 rounded-full bg-white text-black font-bold mt-2'>Browse podcasts</button>

</div>


        </div>

    </div>
  )
}

export default Sidebar