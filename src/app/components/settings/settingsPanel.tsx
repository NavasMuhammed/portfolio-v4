"use client"
import React from 'react'
import { ThemeSettings } from './themeSettings'
import { useRouter } from 'next/navigation'

type Props = {}

const SettingsPanel = (props: Props) => {
    const router = useRouter()
    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About Me',
            link: '/about'
        }
        // ,
        // {
        //     name: 'Contact',
        //     link: '/'
        // },
        // {
        //     name: 'Blog',
        //     link: '/about'
        // },
    ]
    const handleRouteClick = (link: string) => {
        router.push(link)
        document.body.classList.toggle('settings-open')
    }
    return (
        <div className="settings-panel absolute top-0 ">
            <div className="panel-container sticky top-12">
                <div className="navbar-items visible flex flex-1 flex-col justify-center lg:hidden">
                    {navItems.map((item, index) => (
                        <div key={index} onClick={() => handleRouteClick(item.link)} className="text-lg  py-4">{item.name}</div>
                    ))}
                </div>
                <span className='hidden  lg:block'>Page Settings</span>
                <br />
                <hr className='horizontal-divider' />
                <br />
                <ThemeSettings />
            </div>
        </div>
    )
}

export default SettingsPanel