"use client"
import { useState } from 'react';
import Image from 'next/image';
import moon from "../assets/destination/image-moon.png"
import mars from "../assets/destination/image-mars.png"
import europa from "../assets/destination/image-europa.png"
import titan from "../assets/destination/image-titan.png"
import {Bellefair, Barlow_Condensed } from 'next/font/google'

const bellefair = Bellefair({ 
  subsets: ['latin'],
  weight: [ '400']
})
const barlowCondensed = Barlow_Condensed({ 
  subsets: ['latin'],
  weight: ['300', '500', '600', '700', '900']
})

export default function Tab () {
  const [toggle, setToggle] = useState(1);

    const handleClick = (index) => {
        setToggle(index);
    }
  return (
    <div className='planet-tabs'>
        <div 
        className={ toggle === 1 ? "planet-tab active-planet-tab" : "planet-tab"}>
            <div className=" lg:w-[45%]">
              <Image
                    priority={true}
                    src={moon}
                    alt='moon image'
                    className=" h-[170px] object-contain md:h-[300px] lg:h-full"
              />
            </div>
            <div className="planet-tab-text pt-6 md:pt-10 lg:pt-0">
                <div className="flex items-center justify-center gap-4 lg:justify-start">
                    <button
                    onClick={() => handleClick(1)}
                    className= { toggle === 1 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >moon</button>
                    <button
                    onClick={() => handleClick(2)}
                    className= { toggle === 2 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >mars</button>
                    <button
                    onClick={() => handleClick(3)}
                    className= { toggle === 3 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >europa</button>
                    <button
                    onClick={() => handleClick(4)}
                    className= { toggle === 4 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >titan</button>
                </div>
                <div className=''>
                    <h2 className={`uppercase text-6xl pt-6 md:text-7xl lg:text-8xl ${bellefair.className}`}>
                    moon</h2>
                    <p className=" text-primary pt-3 pb-8 lg:text-lg">See our planet as you’ve never seen it before. 
                    A perfect relaxing trip away to help regain perspective and come back refreshed. 
                    While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                </div>
                <div className="planet-features">
                  <div>
                    <h3 className={`uppercase text-primary text-sm pb-1 ${barlowCondensed.className}`}>Avg. Distance</h3>
                    <p className={`uppercase text-3xl ${bellefair.className}`}>384,400 km</p>
                  </div>
                  <div>
                    <h3 className={`uppercase text-primary text-sm pb-1 ${barlowCondensed.className}`}>Est. travel time</h3>
                    <p className={`uppercase text-3xl ${bellefair.className}`}>3 days</p>
                  </div>
                </div>
            </div>
        </div>
        <div 
        className={ toggle === 2 ? "planet-tab active-planet-tab" : "planet-tab"}>
            <div className=" lg:w-[45%]">
              <Image
                    priority={true}
                    src={mars}
                    alt='moon image'
                    className=" h-[170px] object-contain md:h-[300px] lg:h-full"
              />
            </div>
            <div className="planet-tab-text pt-6 md:pt-10 lg:pt-0">
                <div className="flex items-center justify-center gap-4 lg:justify-start">
                    <button
                    onClick={() => handleClick(1)}
                    className= { toggle === 1 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >moon</button>
                    <button
                    onClick={() => handleClick(2)}
                    className= { toggle === 2 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >mars</button>
                    <button
                    onClick={() => handleClick(3)}
                    className= { toggle === 3 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >europa</button>
                    <button
                    onClick={() => handleClick(4)}
                    className= { toggle === 4 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >titan</button>
                </div>
                <div className=''>
                    <h2 className={`uppercase text-6xl pt-6 md:text-7xl lg:text-8xl ${bellefair.className}`}>
                    mars</h2>
                    <p className=" text-primary pt-3 pb-8 lg:text-lg">
                    Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                </div>
                <div className="planet-features">
                  <div>
                    <h3 className={`uppercase text-primary text-sm pb-1 ${barlowCondensed.className}`}>Avg. Distance</h3>
                    <p className={`uppercase text-3xl ${bellefair.className}`}>225 MIL. km</p>
                  </div>
                  <div>
                    <h3 className={`uppercase text-primary text-sm pb-1 ${barlowCondensed.className}`}>Est. travel time</h3>
                    <p className={`uppercase text-3xl ${bellefair.className}`}>9 months</p>
                  </div>
                </div>
            </div>
        </div>
        <div 
        className={ toggle === 3 ? "planet-tab active-planet-tab" : "planet-tab"}>
            <div className=" lg:w-[45%]">
              <Image
                    priority={true}
                    src={europa}
                    alt='moon image'
                    className=" h-[170px] object-contain md:h-[300px] lg:h-full"
              />
            </div>
            <div className="planet-tab-text pt-6 md:pt-10 lg:pt-0">
                <div className="flex items-center justify-center gap-4 lg:justify-start">
                    <button
                    onClick={() => handleClick(1)}
                    className= { toggle === 1 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >moon</button>
                    <button
                    onClick={() => handleClick(2)}
                    className= { toggle === 2 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >mars</button>
                    <button
                    onClick={() => handleClick(3)}
                    className= { toggle === 3 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >europa</button>
                    <button
                    onClick={() => handleClick(4)}
                    className= { toggle === 4 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >titan</button>
                </div>
                <div className=''>
                    <h2 className={`uppercase text-6xl pt-6 md:text-7xl lg:text-8xl ${bellefair.className}`}>
                    europa</h2>
                    <p className=" text-primary pt-3 pb-8 lg:text-lg">
                    The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                </div>
                <div className="planet-features">
                  <div>
                    <h3 className={`uppercase text-primary text-sm pb-1 ${barlowCondensed.className}`}>Avg. Distance</h3>
                    <p className={`uppercase text-3xl ${bellefair.className}`}>628 MIL. km</p>
                  </div>
                  <div>
                    <h3 className={`uppercase text-primary text-sm pb-1 ${barlowCondensed.className}`}>Est. travel time</h3>
                    <p className={`uppercase text-3xl ${bellefair.className}`}>3 years</p>
                  </div>
                </div>
            </div>
        </div>
        <div 
        className={ toggle === 4 ? "planet-tab active-planet-tab" : "planet-tab"}>
            <div className=" lg:w-[45%]">
              <Image
                    priority={true}
                    src={titan}
                    alt='titan image'
                    className=" h-[170px] object-contain md:h-[300px] lg:h-full"
              />
            </div>
            <div className="planet-tab-text pt-6 md:pt-10 lg:pt-0">
                <div className="flex items-center justify-center gap-4 lg:justify-start">
                    <button
                    onClick={() => handleClick(1)}
                    className= { toggle === 1 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >moon</button>
                    <button
                    onClick={() => handleClick(2)}
                    className= { toggle === 2 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >mars</button>
                    <button
                    onClick={() => handleClick(3)}
                    className= { toggle === 3 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >europa</button>
                    <button
                    onClick={() => handleClick(4)}
                    className= { toggle === 4 ? `planet-btn active-planet-btn ${barlowCondensed.className}` : `planet-btn ${barlowCondensed.className}`}
                    >titan</button>
                </div>
                <div className=''>
                    <h2 className={`uppercase text-6xl pt-6 md:text-7xl lg:text-8xl ${bellefair.className}`}>
                    titan</h2>
                    <p className=" text-primary pt-3 pb-8 lg:text-lg">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                </div>
                <div className="planet-features">
                  <div>
                    <h3 className={`uppercase text-primary text-sm pb-1 ${barlowCondensed.className}`}>Avg. Distance</h3>
                    <p className={`uppercase text-3xl ${bellefair.className}`}>1.6 BIL. km</p>
                  </div>
                  <div>
                    <h3 className={`uppercase text-primary text-sm pb-1 ${barlowCondensed.className}`}>Est. travel time</h3>
                    <p className={`uppercase text-3xl ${bellefair.className}`}>7 years</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}


    