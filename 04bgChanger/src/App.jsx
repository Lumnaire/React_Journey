import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('Olive');

  // function setColor(color) {
  //   setColor(color)
  // }

  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='text-center text-4xl py-28 font-bold'>Background color is: {color}</div>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor('Red')} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg text-black' style={{backgroundColor: 'red'}}>Red</button>
        <button onClick={() => setColor('Blue')} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg text-black' style={{backgroundColor: 'blue'}}>Blue</button>
            <button onClick={() => setColor('Purple')} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg text-black' style={{backgroundColor: 'purple'}}>Purple</button>
            <button onClick={() => setColor('Yellow')} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg text-black' style={{backgroundColor: 'yellow'}}>Yellow</button>
          <button onClick={() => setColor('Orange')} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg text-black' style={{backgroundColor: 'orange'}}>Orange</button>
          <button onClick={() => setColor('Green')} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg text-black' style={{backgroundColor: 'green'}}>Green</button>
           <button onClick={() => setColor('Pink')} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg text-black' style={{backgroundColor: 'pink'}}>Pink</button>
      </div>
    </div> 
   </div>
  )
}

export default App
