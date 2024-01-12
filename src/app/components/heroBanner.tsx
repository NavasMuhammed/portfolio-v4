import React from 'react'
import HeroCard from './cards/heroCard'

const HeroBanner = () => {
    return (
        <div className='hero-banner-container flex flex-col gap-7'>
            <HeroCard />
            <HeroCard name='test' work='test here' hero={false} />
            <HeroCard name='test' work='test here' hero={false} />
            <HeroCard name='test' work='test here' hero={false} />
            <HeroCard name='test' work='test here' hero={false} />
            <HeroCard name='test' work='test here' hero={false} />
            <HeroCard name='test' work='test here' hero={false} />
        </div>
    )
}

export default HeroBanner