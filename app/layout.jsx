
// import { usePathname } from 'next/navigation'
import Navbar from './components/navbar'
import './globals.css'
import { Barlow} from 'next/font/google'

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: ['300', '500', '600', '700', '900']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={` ${barlow.className} text-base text-light md:bg-tab lg:bg-desk`}>
          <Navbar />
          {children}
        </body>
    </html>
  )
}