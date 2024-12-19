import React, { useContext } from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {
    const {id} = useParams();

    const albumData = albumsData[id];

    const {playWithId} = useContext(PlayerContext)
  return (
    <>
<Navbar/>
<div className=' flex flex-col md:flex-row gap-8 mt-10 md:items-end '>
        <img className=' w-52 rounded' src={albumData.image} alt="" />

        <div className=' flex flex-col '>
            <p>Playlist</p>
            <h2 className=' font-bold text-5xl md:text-7xl mb-4'>{albumData.name}</h2>
            <h4 className=' mb-4'>{albumData.desc}</h4>
            <div className=' flex gap-2 items-center '>
                <img className=' w-8' src={assets.spotify_logo} alt="" />
                <b>Spotify</b>
                <p>• 1,323,154</p>
                <b>• 50 songs ,</b>
                <p>about 2hr 30min</p>

            </div>

        </div>

    </div>
    <div>
    <div className=' grid grid-cols-3 md:grid-cols-4 items-center mt-10 mb-2 '>

        <p className=' text-[#a7a7a7] '><b>#</b> Title</p>
        <p className=' text-[#a7a7a7] ml-5 '>Album</p>
        <p className=' hidden md:block text-[#a7a7a7]'>Date Added</p>
        <p><img className=' w-6 m-auto' src={assets.clock_icon} alt="" /></p>

    </div>
    <hr />
  
{
songsData.map((item,index)=>(
    <div onClick={()=>playWithId(item.id)} key={index} className=' grid grid-cols-3 md:grid-cols-4 gap-4 sm:gap-4  p-4 text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer  '>
<p className=' text-white '>
     <b className=' text-[#a7a7a7] mr-4'>{index+1}</b>
<img className=' inline mr-4  w-10' src={item.image} alt="" />
{item.name}
</p>
<p className=' text-[15px]   '>Happy Favourites</p>
<p className=' text-[15px] hidden md:block'>5 days ago</p>
<p  className='text-[15px] text-center -mr-3.5'>{item.duration}</p>
    </div>
))
}
    
    </div>
    </>
  )
}

export default DisplayAlbum