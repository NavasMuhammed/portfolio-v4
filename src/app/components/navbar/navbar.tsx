'use client'

import { useRouter, usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { SvgIconProvider } from '@/app/utils/helper'
import SettingsPanel from '../settings/settingsPanel'

const NavBar = () => {
    const router = useRouter()
    const pathname = usePathname()

    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About Me',
            link: '/about'
        },
        // {
        //     name: 'Contact',
        //     link: '/contact'
        // },
    ]

    const handleRouteClick = (link: string) => {
        router.push(link)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        const bodyScroll = window.scrollY;
        const navbar = document.querySelector('.navbar-container')
        if (bodyScroll > 50) {
            navbar?.classList.add("nav-scroll-active")
        }
        else {
            navbar?.classList.remove("nav-scroll-active");
        }
    }

    const handleMenuClick = () => {
        document.body.classList.toggle('settings-open')
    }

    return (
        <nav className="navbar-container z-50 fixed w-full flex px-10 xl:px-100 justify-between items-center">
            <div className="navbar-logo py-12"><SvgIconProvider name='logo' size={38} /></div>
            <div className="navbar-items flex flex-1 justify-center">
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleRouteClick(item.link)}
                        className="navbar-item p-10 py-12"
                    >
                        <span className={`hover-item ${pathname === item.link ? 'active-route' : ''}`}>
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
            <div className="settings-container">
                <SvgIconProvider name="gear" size={48} onClick={handleMenuClick} />
                <div className='settings-modal rounded-3xl p-5 right-16 xl:right-24'>
                    <SettingsPanel />
                </div>
            </div>
        </nav>
    )
}

export default NavBar