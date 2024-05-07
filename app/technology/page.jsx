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
    <main className="tech-page min-h-screen pb-10  text-center md:pb-0 lg:text-left">
      <h2 className={`${barlowCondensed.className} uppercase text-xl md:text-left md:pl-10 md:text-xl lg:text-2xl lg:pl-36`}>
        <span
          className=" pr-2 text-white opacity-40
       font-bold tracking-wider"
        >
          03
        </span>
        Space launch 101
      </h2>
      <Tabs />
    </main>
  )
}
