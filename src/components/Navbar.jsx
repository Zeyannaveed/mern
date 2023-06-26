import React from 'react'
import amazonLogo from'../amazon logo.png'
import searchicon from'../searchicon.png'
import cartimg from '../cartimg.png'
import accountimg from '../accountimg.png'
import Account from './Account'
import { useState } from 'react'

// import { BrowserRouter as Router,Link } from 'react-router-dom'

export default function Navbar() {
  const [display,setdisplay] = useState(false)
  function displayit (){
setdisplay(true)
  }
  function notdisplayit (){
    setdisplay(false)
      }
  return (

    <>
    <div>
        <header className="text-white background body-font">
  <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
      <img src={amazonLogo} className='w-28 -ml-8' alt="" />
      <span className="ml-3 text-xl"></span>
    </a>
    <div className='ml-28 flex'>  <input type="text" size="40" className='input h-10  rounded-tl-lg rounded-bl-lg p-2 text-base border text-white ' placeholder='Search...' />
    <span className='orange cursor-pointer rounded-tr-lg rounded-br-lg'><img src={searchicon} className='w-10' alt="" /></span>
    </div>

<div className='ml-auto'>
<img src={cartimg} className="w-10  float-left p-2 orange  rounded-lg" alt="" />
<img onMouseLeave={notdisplayit} onMouseEnter={displayit} src={accountimg} className="w-9  ml-2 float-right " alt="" /></div>
</div>
<div onMouseLeave={notdisplayit} onMouseEnter={displayit} >
  {display && <Account/>}
</div>
    </header>
    </div>
    </>
  )
};
