'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

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

    return (
        <nav className="navbar-container fixed w-full flex px-100 justify-between items-center">
            <div className="navbar-logo ">NAVAS</div>
            <div className="navbar-items flex flex-1 justify-center ">
                {navItems.map((item, index) => (
                    <div key={index} onClick={() => handleRouteClick(item.link)} className="navbar-item p-12 py-12">{item.name}</div>
                ))}
            </div>
            <div className="navbar-menu">menu</div>

        </nav>
    )
}

export default NavBar