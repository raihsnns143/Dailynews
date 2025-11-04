"use client" // ✅ State ব্যবহার করার জন্য এটি অপরিহার্য

import Link from 'next/link'
import React from 'react'
import {
    NavigationMenu, NavigationMenuContent, NavigationMenuItem,
    NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger
} from '../ui/navigation-menu'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from 'next/navigation'

const Navbar = () => { // কম্পোনেন্টের নাম Capital Letter এ 'Navbar' রাখা হলো

    const pathname = usePathname()

    // ✅ useState hook ব্যবহার করা হলো
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    return (
        <header className='py-4 shadow-md sticky top-0 bg-white z-50'>
            <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative'> {/* relative ক্লাসটি যোগ করা হলো */}

                {/* logo */}
                <div className='text-xl font-bold'>
                    <Link href="/">Daily News</Link>
                </div>

                {/* desktop menu (Unchanged) */}
                <NavigationMenu className='hidden lg:flex'>
                    <NavigationMenuList className='flex items-center space-x-6'>

                        {/* News Link */}
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/news"
                                className={`px-4 py-2 ${pathname === '/news' ?
                                    'text-pink-600 font-semibold' : ''} hover:text-pink-600`}
                            >
                                News
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* Services Dropdown (Unchanged) */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='text-gray-700 px-4 py-2 hover:text-pink-600'>
                                Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className='bg-white shadow-lg p-4 rounded-md'>
                                <ul className='space-y-2 text-sm'>
                                    <li>
                                        <NavigationMenuLink href="/web" className='hover:text-pink-600 block'>
                                            Web Development
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink href="/apps" className='hover:text-pink-600 block'>
                                            Mobile Apps
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink href="/seo" className='hover:text-pink-600 block'>
                                            SEO
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* About Link */}
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/about"
                                className={`px-4 py-2 ${pathname === '/about' ?
                                    'text-pink-600 font-semibold' : ''} hover:text-pink-600`}>
                                About
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* Contact Link */}
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/contact"
                                className={`px-4 py-2 ${pathname === '/contact' ?
                                    'text-pink-600 font-semibold' : ''} hover:text-pink-600`}>
                                Contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                {/* color switcher and login button (Unchanged) */}
                <div className='hidden lg:flex items-center space-x-4'>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-700">Dark Mode</span>
                        <Switch />
                    </div>
                    <Button variant="default">Login</Button>
                </div>

                {/* mobile hambuger menu button (Unchanged) */}
                <div className='lg:hidden'>
                    <Button onClick={toggleMenu} variant="outline">
                        {isMenuOpen ? <RxCross2 size={24}/> : <GiHamburgerMenu size={24}/>}
                    </Button>
                </div>
            </nav>

            {/* 📱 মোবাইল মেনু: isMenuOpen-এর উপর ভিত্তি করে ডিসপ্লে নিয়ন্ত্রণ */}
            <div 
                className={`
                    lg:hidden 
                    absolute top-[64px] left-0 w-full 
                    bg-white shadow-lg z-40 
                    p-4 border-t border-gray-100
                    transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 overflow-hidden opacity-0'}
                `}
            >
                <nav className='flex flex-col space-y-2'>
                    
                    {/* News Link (Mobile) */}
                    <Link 
                        href="/news" 
                        className="text-gray-800 hover:bg-pink-50 p-2 rounded block font-medium" 
                        onClick={toggleMenu} // লিঙ্ক ক্লিক করলে মেনু বন্ধ হবে
                    >
                        News
                    </Link>
                    
                    {/* About Link (Mobile) */}
                    <Link 
                        href="/about" 
                        className="text-gray-800 hover:bg-pink-50 p-2 rounded block font-medium" 
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                    
                    {/* Contact Link (Mobile) */}
                    <Link 
                        href="/contact" 
                        className="text-gray-800 hover:bg-pink-50 p-2 rounded block font-medium" 
                        onClick={toggleMenu}
                    >
                        Contact
                    </Link>

                    {/* মোবাইল মেনুতে ডার্ক মোড এবং লগইন বাটন যোগ করা যেতে পারে */}
                    <div className="flex items-center justify-between pt-4 border-t mt-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-700">Dark Mode</span>
                            <Switch />
                        </div>
                        <Button variant="default" onClick={toggleMenu}>Login</Button>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Navbar