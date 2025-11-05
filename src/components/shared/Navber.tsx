"use client"

import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from 'next/navigation'
import { Switch } from "@/components/ui/switch"
import { useDarkMode } from '@/hooks/useDarkMode'; // ✅ এই hook import করা হলো

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  // Dark Mode
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <header className='py-4 shadow-md sticky top-0 bg-white dark:bg-gray-900 z-50 transition-colors duration-300'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative'>

        {/* Logo */}
        <div className='text-xl font-bold text-gray-900 dark:text-white'>
          <Link href="/">Daily News</Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center space-x-4'>
          <Link href="/news" className={`px-4 py-2 ${pathname === '/news' ? 'text-pink-600 font-semibold' : 'text-gray-900 dark:text-white'} hover:text-pink-600`}>
            News
          </Link>
          <Link href="/about" className={`px-4 py-2 ${pathname === '/about' ? 'text-pink-600 font-semibold' : 'text-gray-900 dark:text-white'} hover:text-pink-600`}>
            About
          </Link>
          <Link href="/contact" className={`px-4 py-2 ${pathname === '/contact' ? 'text-pink-600 font-semibold' : 'text-gray-900 dark:text-white'} hover:text-pink-600`}>
            Contact
          </Link>

          {/* Dark Mode Switch 
                    <div className="flex items-center space-x-2 ml-4">
            <span className="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
            <Switch checked={isDark} onCheckedChange={toggleDarkMode} />
          </div>

          <Button variant="default">Login</Button>
          */}

        </div>

        {/* Mobile Hamburger */}
        <div className='lg:hidden'>
          <Button onClick={toggleMenu} variant="outline">
            {isMenuOpen ? <RxCross2 size={24}/> : <GiHamburgerMenu size={24}/>}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-[64px] left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-40 p-4 border-t border-gray-100 dark:border-gray-700 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
        <nav className='flex flex-col space-y-2'>
          <Link href="/news" className="text-gray-800 dark:text-gray-100 hover:bg-pink-50 dark:hover:bg-gray-700 p-2 rounded block font-medium" onClick={toggleMenu}>News</Link>
          <Link href="/about" className="text-gray-800 dark:text-gray-100 hover:bg-pink-50 dark:hover:bg-gray-700 p-2 rounded block font-medium" onClick={toggleMenu}>About</Link>
          <Link href="/contact" className="text-gray-800 dark:text-gray-100 hover:bg-pink-50 dark:hover:bg-gray-700 p-2 rounded block font-medium" onClick={toggleMenu}>Contact</Link>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
              <Switch checked={isDark} onCheckedChange={toggleDarkMode} />
            </div>
            <Button variant="default" onClick={toggleMenu}>Login</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
