"use client"
import { useState } from 'react';
import Image from 'next/image';
import spaceVehicle from "../assets/technology/image-launch-vehicle-landscape.jpg"
import spaceVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg"
import spacePort from "../assets/technology/image-spaceport-landscape.jpg"
import spacePortPortrait from "../assets/technology/image-spaceport-portrait.jpg"
import spaceCapsule from "../assets/technology/image-space-capsule-landscape.jpg"
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg"
import {Bellefair, Barlow_Condensed } from 'next/font/google'

const bellefair = Bellefair({ 
  subsets: ['latin'],
  weight: [ '400']
})
const barlowCondensed = Barlow_Condensed({ 
  subsets: ['latin'],
  weight: ['300', '500', '600', '700', '900']
})

export default function Tab() {

  const [toggle, setToggle] = useState(1);

    const handleClick = (index) => {
        setToggle(index);
    }

  return (
    <div className='tech-tab-container'>
      <div 
        className={ toggle === 1 ? "tech-tab active-tech-tab" : "tech-tab"}>
            <div className=" w-full lg:w-[30%]">
              <Image
                    priority={true}
                    src={spaceVehicle}
                    alt='space vehicle image'
                    className=" w-full block  lg:hidden"
              />
              <Image
                    priority={true}
                    src={spaceVehiclePortrait}
                    alt='space vehicle image'
                    className=" hidden w-full lg:block"
              />
            </div>
            <div className="tech-tab-text px-5 pt-6 m-auto ">
                <div className="flex items-center justify-center gap-4 
                lg:justify-start lg:flex-col pb-10 lg:pb-0">
                    <button
                    onClick={() => handleClick(1)}
                    className= { toggle === 1 ? `tech-btn active-tech-btn ${bellefair.className}` : `tech-btn ${bellefair.className}`}
                    >1</button>
                    <button
                    onClick={() => handleClick(2)}
                    className= { toggle === 2 ? `tech-btn active-tech-btn ${bellefair.className}` : `tech-btn ${bellefair.className}`}
                    >2</button>
                    <button
                    onClick={() => handleClick(3)}
                    className= { toggle === 3 ? `tech-btn active-tech-btn ${bellefair.className}` : `tech-btn ${bellefair.className}`}
                    >3</button>
                </div>
                <div className=' '>
                  <h3 className={` uppercase text-sm tracking-widest md:text-base lg:text-base ${barlowCondensed.className}`}>the terminology...</h3>
                    <h2 className={`uppercase text-2xl md:text-4xl lg:text-6xl ${bellefair.className}`}>
                    Launch vehicle</h2>
                    <p className=" text-primary pt-3 text-base lg:max-w-md lg:text-lg">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth`s surface to space, usually to Earth orbit or beyond. 
                    Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                    it`s quite an awe-inspiring sight on the launch pad!</p>
                </div>
            </div>
      </div>
      <div 
        className={ toggle === 2 ? "tech-tab active-tech-tab" : "tech-tab"}>
            <div className=" w-full lg:w-[30%]">
              <Image
                    priority={true}
                    src={spacePort}
                    alt='space vehicle image'
                    className=" w-full block object-cover lg:hidden"
              />
              <Image
                    priority={true}
                    src={spacePortPortrait}
                    alt='space vehicle image'
                    className=" hidden w-full object-cover lg:block"
              />
            </div>
            <div className="tech-tab-text px-5 pt-6 m-auto ">
                <div className="flex items-center justify-center gap-4 
                lg:justify-start lg:flex-col pb-10 lg:pb-0">
                    <button
                    onClick={() => handleClick(1)}
                    className= { toggle === 1 ? `tech-btn active-tech-btn ${bellefair.className}` : `tech-btn ${bellefair.className}`}
                    >1</button>
                    <button
                    onClick={() => handleClick(2)}
                    className= { toggle === 2 ? `tech-btn active-tech-btn ${bellefair.className}` : `tech-btn ${bellefair.className}`}
                    >2</button>
                    <button
                    onClick={() => handleClick(3)}
                    className= { toggle === 3 ? `tech-btn active-tech-btn ${bellefair.className}` : `tech-btn ${bellefair.className}`}
                    >3</button>
                </div>
                <div className=' '>
                  <h3 className={` uppercase text-sm tracking-widest md:text-base lg:text-base ${barlowCondensed.className}`}>the terminology...</h3>
                    <h2 className={`uppercase text-2xl md:text-4xl lg:text-6xl ${bellefair.className}`}>
                    Spaceport</h2>
                    <p className=" text-primary pt-3 text-base lg:max-w-md lg:text-lg">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                </div>
            </div>
      </div>
      <div 
        className={ toggle === 3 ? "tech-tab active-tech-tab" : "tech-tab"}>
            <div className=" w-full lg:w-[30%]">
              <Image
                    priority={true}
                    src={spaceCapsule}
                    alt='space vehicle image'
                    className=" w-full block object-cover lg:hidden"
              />
              <Image
                    priority={true}
                    src={spaceCapsulePortrait}
                    alt='space vehicle image'
                    className=" hidden w-full object-cover lg:block"
              />
            </div>
            <div className="tech-tab-text px-5 pt-6 m-auto ">
                <div className="flex items-center justify-center gap-4 
                lg:justify-start lg:flex-col pb-10 lg:pb-0">
                    <button
                    onClick={() => handleClick(1)}
                    className= { toggle === 1 ? `tech-btn active-tech-btn ${bellefair.className}` : `tech-btn ${bellefair.className}`}
                    >1</button>
                    <button
                    onClick={() => handleClick(2)}
                    className= { toggle === 2 ? `tech-btn active-tech-btn ${bellefair.className}` : `tech-btn ${bellefair.className}`}
                    >2</button>
                    <button
                    onClick={() => handleClick(3)}
                    className= { toggle === 3 ? `tech-btn active-tech-btn ${bellefair.className}` : `tech-btn ${bellefair.className}`}
                    >3</button>
                </div>
                <div className=' '>
                  <h3 className={` uppercase text-sm tracking-widest md:text-base lg:text-base ${barlowCondensed.className}`}>the terminology...</h3>
                    <h2 className={`uppercase text-2xl md:text-4xl lg:text-6xl ${bellefair.className}`}>
                    space capsule</h2>
                    <p className=" text-primary pt-3 text-base lg:max-w-md lg:text-lg">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth`s atmosphere without wings. Our capsule is where you`ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                </div>
            </div>
      </div>
    </div>
  )
}
