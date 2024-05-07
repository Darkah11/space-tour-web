import { Barlow_Condensed, Bellefair } from "next/font/google";
import Tabs from "./tabs"


const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "900"],
});
const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});

export default function crew() {
  return (
    <main className=" crew-page min-h-screen pb-10 px-5 text-center md:pb-0 md:px-10 lg:px-36">
      <h2 className={`${barlowCondensed.className} uppercase text-xl md:text-left md:text-xl lg:text-2xl`}>
        <span
          className=" pr-2 text-white opacity-40
       font-bold tracking-wider"
        >
          02
        </span>
        meet your crew
      </h2>
      <Tabs />
    </main>
  )
}
