"use client"
import Image from "next/image"
import { useState } from "react"
import logo from "../assets/shared/logo.svg"
import Link from "next/link"
import {Barlow_Condensed} from 'next/font/google'

const barlowCondensed = Barlow_Condensed({ 
  subsets: ['latin'],
  weight: ['300', '500', '600', '700', '900']
})

export default function Navbar() {


  const [open, setOpen] = useState(false)

  const handleOpen = (openValue) => {
    setOpen(openValue)
  }
  console.log(open);

  return (
    <nav className={`absolute  w-full flex justify-between py-5 items-center px-5 
    md:pl-10 md:py-0 md:pr-0 lg:pl-14 lg:mt-10`} >
      <div>
        <Image
              src={logo}
              alt="Company logo"
              priority={true}
        />
      </div>
      <div className="">
        <button onClick={() => handleOpen(!open)} className={` mobile-menu-btn w-6 h-[21px] md:hidden ${open ? " hidden" : " block"}`}></button>
            <ul className={`hidden md:flex md:items-center md:px-10 md:gap-10 bg-nav lg:pl-28 lg:pr-36`}>
              <li><Link className={`${barlowCondensed.className} nav-link`} href={'/'} >
                <span className=" hidden lg:inline font-bold">00</span> home</Link>
              </li>
              <li><Link className={`${barlowCondensed.className} nav-link`} href={'/destination'} >
                <span className=" hidden lg:inline font-bold">01</span> destination</Link>
              </li>
              <li><Link className={`${barlowCondensed.className} nav-link`} href={'/crew'} >
                <span className=" hidden lg:inline font-bold">02</span> crew</Link>
              </li>
              <li><Link className={`${barlowCondensed.className} nav-link`} href={'/technology'} >
                <span className=" hidden lg:inline font-bold">03</span> technology</Link>
              </li>
            </ul>
      </div>
      {open && (
        <div  className="fixed top-0 right-0 pt-24 z-10 md:hidden h-screen w-2/3 py-5 px-8 bg-white/5 backdrop-blur-3xl ">
          <ul>
              <li className=" absolute right-5 top-8 "><button onClick={() => handleOpen(!open)} className={` close-btn w-6 h-[21px]`}></button></li>
              <li className=" py-4"><Link onClick={() => handleOpen(!open)} className={`${barlowCondensed.className} mobile-link`} href={'/'} >
                <span className="  lg:inline font-bold">00</span> home</Link>
              </li>
              <li className=" py-4"><Link onClick={() => handleOpen(!open)} className={`${barlowCondensed.className} mobile-link`} href={'/destination'} >
                <span className=" font-bold">01</span> destination</Link>
              </li>
              <li className=" py-4"><Link onClick={() => handleOpen(!open)} className={`${barlowCondensed.className} mobile-link`} href={'/crew'} >
                <span className=" font-bold">02</span> crew</Link>
              </li>
              <li className=" py-4"><Link onClick={() => handleOpen(!open)} className={`${barlowCondensed.className} mobile-link`} href={'/technology'} >
                <span className=" font-bold">03</span> technology</Link>
              </li>
            </ul>
        </div>
              
      )}
    </nav>
  )
}
