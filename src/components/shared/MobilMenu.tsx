"use client"

import React from 'react'

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Button } from '../ui/button';



const MobilMenu = () => {

const [isMenuOpen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

  return (
    <div>
        <div className='lg:hidden'>
                    <Button onClick={toggleMenu} variant="outline">
                        {isMenuOpen ? <RxCross2 size={24}/> : <GiHamburgerMenu size={24}/>}
                    </Button>
                </div>
    </div>
  )
}

export default MobilMenu

//kono button use kori thokon "use client" ai vaba alada kora use korta hoy