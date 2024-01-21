'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SvgIconProdiver } from '@/app/utils/helper'
import SettingsPanel from '../settingsPanel'

const NavBar = () => {
    const router = useRouter()
    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About Me',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/'
        },
        {
            name: 'Blog',
            link: '/about'
        },
        {
            name: 'Portfolio',
            link: '/'
        },
    ]
    const handleRouteClick = (link: string) => {
        router.push(link)
    }
    const handleMenuClick = () => {
        //add a class to the body to show the menu
        document.body.classList.toggle('settings-open')
        //close menu when clicking out side of it 
    }

    return (
        <nav className="navbar-container z-50 fixed w-full flex px-10   xl:px-100 justify-between items-center">
            <div className="navbar-logo  py-12 ">LOGO</div>
            <div className="navbar-items flex flex-1 justify-center ">
                {navItems.map((item, index) => (
                    <div key={index} onClick={() => handleRouteClick(item.link)} className="navbar-item p-10 py-12">{item.name}</div>
                ))}
            </div>
            <div className="settings-container ">
                <SvgIconProdiver name="gear" color="#fff" size={48} onClick={handleMenuClick} />
                <div className='settings-modal  rounded-3xl p-5 right-16 xl:right-24'>
                    <SettingsPanel />
                </div>
            </div>
        </nav>
    )
}

export default NavBar