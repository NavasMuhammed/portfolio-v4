import React from 'react'
import PorfileCard from '@components/cards/profileCard'
import HeroBanner from '@/app/components/heroBanner'
import SkillCard from '@components/cards/skillCard'

const Home = () => {
    return (
        <section className='banner'>
            <div className="banner-container flex gap-16 justify-between max-[600px]:flex-col">
                <PorfileCard />
                <HeroBanner />
                <SkillCard />
            </div>
        </section>
    )
}

export default Home