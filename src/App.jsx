import React,{useContext} from 'react'
import { PlayerContext } from './context/PlayerContext'
import Sidebar from './Components/Sidebar'
import Display from './Components/Display'
import Play from './Components/Play'


const App = () => {
  const {audioRef,track}= useContext(PlayerContext)
  return (
    <div className=' h-screen bg-black'>
<div className=' h-[90%] flex'>
<Sidebar/>
<Display/>
</div>

<Play/>
<audio ref={audioRef} preload=' auto' src={track.file}></audio>
    </div>
  )
}

export default App