import React from 'react'
import { Button } from '../ui/button'
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-gray-100 dark:bg-gray-800 py-8'>
            <div className='maz-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row justify-between items-center 
        space-y-6 md:space-y-0'>
                    {/* logo and Descripation */}

                    <div className='text-center md:text-left'>
                        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
                            Daily News
                        </h2>
                        <p className='text-gray-600 dark:text-gray-400 mt-2'>
                            Building a better digital experience fr everyone.
                        </p>
                    </div>
                    {/* Navigation Links */}
                    <div className='flex space-x-6 text-gray-600 dark:text-gray-400'>
                        <a href="/about" className='hover:text-gray-900 dark:hover:text-white'>
                            About us
                        </a>
                        <a href="/services" className='hover:text-gray-900 dark:hover:text-white'>
                            Services
                        </a>
                        <a href="/contact" className='hover:text-gray-900 dark:hover:text-white'>
                            Contact
                        </a>
                        <a href="/privacy policy" className='hover:text-gray-900 dark:hover:text-white'>
                            Privacy Policy
                        </a>
                    </div>
                    {/* social Media Icons */}
                    <div className='flex space-x-4'>
                    <a href="https://x.com/fastdLapp"
                    className='text-gray-600 dark:text-gray-400 hover:text-gray-900
                    dark:hover:text-white'>
                        <FaSquareXTwitter size={24}/>
                    </a>

                    <a href="https://fastdl.app/en" 
                     className='text-gray-600 dark:text-gray-400 hover:text-gray-900
                    dark:hover:text-white'>
                        <SiInstagram size={24}/>
                    </a>

                    <a href="https://github.com/fastdLapp"
                     className='text-gray-600 dark:text-gray-400 hover:text-gray-900
                    dark:hover:text-white'>
                        <FaGithubSquare size={24}/>
                    </a>
                    </div>
                </div>
            
            {/* button section */}
            <div className='mt-8 text-center md:flex md:justify-between md:items-center'>
                <p className='text-gray-600 dark:text-gray-400'>&copy: 2024 YourCompany. All rights resrved.</p>
                <Button variant="outline" className='mt-4 md:mt-0 dark:bg-gray-900 dark:text-white'>Subscribe</Button>
            </div>
           </div>
        </footer>
    )
}

export default Footer