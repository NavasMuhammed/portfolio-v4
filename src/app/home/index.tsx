import React from 'react'
import ProfileCard from '@components/cards/profileCard'
import HeroBanner from '@/app/components/heroBanner'
import SkillCard from '@components/cards/skillCard'
import Experience from '@components/experience'
import Education from '@components/Education'
import { ProjectsSection } from '../components/projects/projectsSection'
import SwitchComponent from '../components/switchComponent/switchComponent'
import Switch from '../components/switchComponent/switch'
import SwitchBody from '../components/switchComponent/switchBody'

const Home = () => {
    return (
        <section className='home-container'>
            <div className="banner-container m-auto flex gap-16 justify-between max-w-[2160px] max-[600px]:flex-col">
                <ProfileCard name='Muhammed Navas' work='Shopify | Full stack Dev' loc='Lives in Kochi,India' />
                <div className='hero-banner-container flex gap-7 flex-wrap lg:flex-col '>
                    <HeroBanner />
                    <SwitchComponent
                        Header='Education And Experience'
                        title='Your website is an extension of your brand, and I&apos;m here to help you make it the'
                        actionMarkup={<Switch left='Experience' right='Education' />}
                        body={<SwitchBody target='switch' body={<Experience />} switchBody={<Education />} />}
                    />
                </div>
                <SkillCard />
            </div>
            <ProjectsSection />
        </section>
    )
}

export default Home