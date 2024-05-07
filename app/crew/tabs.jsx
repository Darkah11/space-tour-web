"use client"
import { useState } from 'react';
import Image from 'next/image';
import douglas from "../assets/crew/image-douglas-hurley.png"
import anousheh from "../assets/crew/image-anousheh-ansari.png"
import mark from "../assets/crew/image-mark-shuttleworth.png"
import victor from "../assets/crew/image-victor-glover.png"
import {Bellefair } from 'next/font/google'

const bellefair = Bellefair({ 
    subsets: ['latin'],
    weight: [ '400']
  })

export default function Tab () {

    const [toggle, setToggle] = useState(1);

    const handleClick = (index) => {
        setToggle(index);
    }
    console.log(toggle);
    // const tabText = useRef();
    // const tabImage = useRef();
    // const [textHeight, setTextHeight] = useState(0);
    // const [imgHeight, setImgHeight] = useState(0);

    // useLayoutEffect(() => {
    
    //     tabText.current = `${tabText.current.clientHeight}px`;
    //     tabImage.current = `${tabImage.current.clientHeight}px`;
    //     setTextHeight(tabText.current);
    //     setImgHeight(tabImage.current);
    // })
    // console.log(imgHeight); 
    

  return (
    <div className='tabs-container pt-8 lg:pt-0'>
        <div 
        className={ toggle === 1 ? "tab-content active-tab-content md:mt-48 lg:mt-0" : "tab-content md:mt-48 lg:mt-0"}>
            <div className="img-container flex justify-center md:pt-20 md:border-b-0 lg:w-[45%] lg:pt-0">
                <Image
                    priority={true}
                    src={douglas}
                    alt='douglas image'
                    className=" h-64 object-contain md:h-[572px] lg:h-full"
                />
            </div>
            <div className="tab-text pt-6 md:pt-0">
                <div className="button-conatiner flex items-center justify-center gap-4">
                    <button
                    onClick={() => handleClick(1)}
                    className= { toggle === 1 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                    <button
                    onClick={() => handleClick(2)}
                    className= { toggle === 2 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                    <button
                    onClick={() => handleClick(3)}
                    className= { toggle === 3 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                    <button
                    onClick={() => handleClick(4)}
                    className= { toggle === 4 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                </div>
                <div className='pt-6 lg:text-left flex items-center flex-col lg:items-start'>
                    <h3 className={`text-base uppercase text-light opacity-30 md:text-lg lg:text-3xl ${bellefair.className}`}>Commander</h3>
                    <h2 className={`uppercase text-2xl py-2 md:text-4xl lg:text-5xl ${bellefair.className}`}>Douglas Hurley</h2>
                    <p className=" text-primary lg:text-lg max-w-md">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. 
                    He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
            </div>
        </div>
        <div 
        className={ toggle === 2 ? "tab-content active-tab-content" : "tab-content"}>
            <div className="img-container flex justify-center border-b md:pt-64 md:border-b-0 lg:w-[40%] lg:pt-0">
                <Image
                    priority={true}
                    src={mark}
                    alt="mark's image"
                    className=" h-64 object-contain md:h-[572px] lg:h-full"
                />
            </div>
            <div className="tab-text pt-6 md:pt-0">
                <div className="button-conatiner flex items-center justify-center gap-4">
                    <button
                    onClick={() => handleClick(1)}
                    className= { toggle === 1 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                    <button
                    onClick={() => handleClick(2)}
                    className= { toggle === 2 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                    <button
                    onClick={() => handleClick(3)}
                    className= { toggle === 3 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                    <button
                    onClick={() => handleClick(4)}
                    className= { toggle === 4 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                </div>
                <div className='pt-6 lg:text-left flex items-center flex-col lg:items-start'>
                    <h3 
                    className={`text-base uppercase text-light opacity-30 md:text-lg lg:text-3xl ${bellefair.className}`}
                    >Mission Specialist</h3>
                    <h2 
                    className={`uppercase text-2xl py-2 md:text-4xl lg:text-5xl ${bellefair.className}`}
                    >Mark shuttleworth</h2>
                    <p className=" text-primary lg:text-lg max-w-md">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. 
                    Shuttleworth became the first South African to travel to space as a space tourist.</p>
                </div>
            </div>
        </div>
        <div 
        className={ toggle === 3 ? "tab-content active-tab-content" : "tab-content"}>
            <div className="img-container flex justify-center border-b md:pt-64 md:border-b-0 lg:w-[40%] lg:pt-0">
                <Image
                    priority={true}
                    src={victor}
                    alt="victpr's image"
                    className=" h-64 object-contain md:h-[572px] lg:h-full"
                />
            </div>
            <div className="tab-text pt-6 md:pt-0">
                <div className="button-conatiner flex items-center justify-center gap-4">
                    <button
                    onClick={() => handleClick(1)}
                    className= { toggle === 1 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                    <button
                    onClick={() => handleClick(2)}
                    className= { toggle === 2 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                    <button
                    onClick={() => handleClick(3)}
                    className= { toggle === 3 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                    <button
                    onClick={() => handleClick(4)}
                    className= { toggle === 4 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                </div>
                <div className='pt-6 lg:text-left flex items-center flex-col lg:items-start'>
                    <h3 
                    className={`text-base uppercase text-light opacity-30 md:text-lg lg:text-3xl ${bellefair.className}`}
                    >Pilot</h3>
                    <h2 
                    className={`uppercase text-2xl py-2 md:text-4xl lg:text-5xl ${bellefair.className}`}
                    >victor glover</h2>
                    <p className=" text-primary lg:text-lg max-w-md">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. 
                    Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
                </div>
            </div>
        </div>
        <div 
        className={ toggle === 4 ? "tab-content active-tab-content" : "tab-content"}>
            <div className="img-container flex justify-center border-b md:pt-64 md:border-b-0 lg:w-[40%] lg:pt-0">
                <Image
                    priority={true}
                    src={anousheh}
                    alt="anousheh's image"
                    className=" h-64 object-contain md:h-[572px] lg:h-full"
                />
            </div>
            <div className="tab-text pt-6 md:pt-0">
                <div className="button-conatiner flex items-center justify-center gap-4">
                    <button
                    onClick={() => handleClick(1)}
                    className= { toggle === 1 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                    <button
                    onClick={() => handleClick(2)}
                    className= { toggle === 2 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                    <button
                    onClick={() => handleClick(3)}
                    className= { toggle === 3 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                    <button
                    onClick={() => handleClick(4)}
                    className= { toggle === 4 ? "tab-btn active-tab-btn" : "tab-btn"}
                    ></button>
                </div>
                <div className='pt-6 lg:text-left flex items-center flex-col lg:items-start'>
                    <h3 
                    className={`text-base uppercase text-light opacity-30 md:text-lg lg:text-3xl ${bellefair.className}`}
                    >Flight Engineer</h3>
                    <h2 
                    className={`uppercase text-2xl py-2 md:text-4xl lg:text-5xl ${bellefair.className}`}
                    >Anousheh Ansari</h2>
                    <p className=" text-primary lg:text-lg max-w-md">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, 
                    the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
                </div>
            </div>
        </div>
    </div>
  )
}