import React from 'react'
import PorfileCard from '@components/cards/profileCard'
import HeroBanner from '@components/cards/heroBanner'
import SkillCard from '@components/cards/skillCard'

const Home = () => {
    return (
        <section className='banner'>
            <div className="banner-container flex gap-28 justify-between">
                <PorfileCard />
                <HeroBanner />
                <SkillCard />
            </div>
        </section>
    )
}

export default Home