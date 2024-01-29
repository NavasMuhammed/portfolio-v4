import React from 'react'
import HeroCard from './cards/heroCard'

const HeroBanner = () => {
    return (
        <div className='hero-banner-container flex flex-col gap-7'>
            <HeroCard  name='Navas' work='Fullstack developer'/>
        </div>
    )
}

export default HeroBanner