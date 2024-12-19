import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Play = () => {
    const {track,seekBg,seekBar,playStatus,play,pause,time,previous,next,seekSong} = useContext(PlayerContext);
    
  return (
    <div className=' h-[10%] bg-black text-white px-4 flex items-center justify-between'>
    <div className=' hidden lg:flex items-center gap-4 '>
<img className=' w-12' src={track.image} alt="" />
<div>
    <p>{track.name}</p>
    <p>{track.desc.slice(0,12)}</p>
</div>
    </div>

<div className=' flex flex-col gap-1 items-center m-auto'>

    <div className=' flex gap-3'>
        <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
        <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
        {
            playStatus ?  <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" /> :      <img onClick={play}  className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
        }
   
       
        <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />

    </div>
    <div className=' flex items-center gap-5'>
        <p>{time.currentTime.minute}:{time.currentTime.second}</p>
        <div onClick={seekSong} ref={seekBg} className=' cursor-pointer w-[60vw] max-w-[500px] rounded-full bg-gray-300 h-1'>
<hr ref={seekBar}  className=' h-1 rounded-full  w-0 border-none bg-green-800'/>
        </div>
<p>{time.finalTime.minute}:{time.finalTime.second}</p>
    </div>

</div>

<div className=' hidden lg:flex gap-2 items-center opacity-75'>
    <img className='  w-4 cursor-pointer' src={assets.plays_icon} alt="" />
    <img className=' w-4 cursor-pointer' src={assets.mic_icon} alt="" />
    <img className=' w-4 cursor-pointer' src={assets.queue_icon} alt="" />
    <img className=' w-4 cursor-pointer' src={assets.speaker_icon} alt="" />
    <img className=' w-4 cursor-pointer' src={assets.volume_icon} alt="" />
    <div className=' w-20 bg-slate-300 h-1 rounded-full'>
         
    </div>
    <img className=' w-4 cursor-pointer' src={assets.mini_player_icon} alt="" />
    <img className=' w-4 cursor-pointer' src={assets.zoom_icon} alt="" />

    
</div>


    </div>
  )
}

export default Play