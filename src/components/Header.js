import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import logo from "../assets/sathya2.png"


export default function Header() {
    const[toggleMenu, setToggleMenu]=useState(false);

  return <header className="flex justify-between px-9 py-6 bg-primary">
    <a className="font-bold text-lg text-peach-50" href="#"><img src={logo} className='w-1/5'/></a>
    <nav className="hidden md:block">
    <ul className="flex text-peach-100">
        <li><a href="/">Home<span></span></a></li>
        <li><a href="#about">About<span></span></a></li>
        <li><a href="#projects">Projects<span></span></a></li>
        <li><a href="#resume">Resume<span></span></a></li>
        <li><a href="#contact">Contact<span></span></a></li>
    </ul>
    </nav>
    { toggleMenu && <nav className="block md:hidden ">
    <ul onClick={()=> setToggleMenu(!toggleMenu)} className="flex flex-col text-peach-50 mobile-nav">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>}
    
    <button onClick={()=> setToggleMenu(!toggleMenu)} className='bloack md:hidden'><Bars3Icon className='text-white h-7' /></button>
  </header>
}
 