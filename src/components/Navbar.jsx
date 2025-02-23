import React from 'react'
import logo from "../assets/kd_logo.jpeg"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-6 flex items-center justify-between py-2 lg:mb-20'>
        <div className='flex flex-shrink-0 items-center'>
            <h2 className='text-6xl text-white font-bold'>KD</h2>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/dave-kanan/"><FaLinkedin /></a>
            <a href="https://github.com/KananDave22"><FaGithub /></a>
            <a href="https://drive.google.com/file/d/17VB507inVn1g36iJL2RbyaHJIUlCsv60/view?usp=sharing" className='p-2 rounded-xl border-0 bg-neutral-800 cursor-pointer'>Resume</a>
        </div>
    </nav>
  )
}

export default Navbar