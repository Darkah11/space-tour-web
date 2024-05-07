import {Barlow_Condensed, Bellefair } from 'next/font/google'

const barlowCondensed = Barlow_Condensed({ 
  subsets: ['latin'],
  weight: ['300', '500', '600', '700', '900']
})
const bellefair = Bellefair({ 
  subsets: ['latin'],
  weight: [ '400']
})

export default function Home() {
  return (
    <main className=" bg-home min-h-screen justify-end pb-10 px-5 flex flex-col items-center md:px-10 lg:px-36 lg:flex-row lg:justify-between">
      <div className=" text-center max-w-[450px] lg:text-left">
        <h2 className={`uppercase text-lg text-primary md:text-xl lg:text-2xl ${barlowCondensed.className}`}>so, you want to travel to</h2>
        <h1 className={`uppercase py-5 text-8xl md:text-big ${bellefair.className}`}>space</h1>
        <p className=" text-primary leading-6 lg:text-lg">Let’s face it; if you want to go to space, you might as well genuinely
         go to outer space and not hover kind of on the edge of it. Well sit back,
        and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <button className={`${bellefair.className} mt-[100px] tracking-widest text-dark text-[20px]
       w-[150px] h-[150px] bg-light rounded-full uppercase md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px]`} >explore</button>
    </main>
  )
}
