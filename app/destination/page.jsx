// import Image from "next/image";
// import moon from "../assets/destination/image-moon.png";
import { Barlow_Condensed, Bellefair } from "next/font/google";
import Tabs from "./tabs";


const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "900"],
});
const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});

export default function page() {
  return (
    <main className=" destination-page min-h-screen pb-10 px-5 text-center md:px-10 lg:px-36 lg:text-left">
      <h2 className={`${barlowCondensed.className} uppercase 
      md:text-left md:text-xl lg:text-2xl`}>
        <span
          className=" pr-2 text-light opacity-40
       font-bold tracking-wider "
        >
          01
        </span>
        pick your destination
      </h2>
      <Tabs />
    </main>
  );
}
