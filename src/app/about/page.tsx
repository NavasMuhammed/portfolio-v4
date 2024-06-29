import MainLayout from '@/app/layouts/mainLayout'
import SkillCard from '@components/cards/skillCard'
import SwitchComponent from '@components/switchCompoent/switchComponent'
import Switch from '@components/switchCompoent/switch'
import SwitchBody from '@components/switchCompoent/switchBody'
import Experience from '@components/experience'
import Education from '@components/Education'
import { Card } from '../components/cards/basicCard'

const About = () => {
    const content = 'Your website is an extension of your brand, and I&apos;m here to help you make it the best it can be. I specialize in creating custom websites that are tailored to your unique needs. Whether you need a simple landing page or a complex e-commerce site, I can help you bring your vision to life. With my expertise in web development, I can create a website that is not only visually stunning but also functional and user-friendly. Let me help you take your online presence to the next level.'
    return (
        <MainLayout>
            <div className='flex flex-col p-4 sm:flex-row '>
                <Card content={content} id='aboutMe' title='I Bring Your Website With Vision To Life' />
            </div>
            <SwitchComponent
                Headder='Education And Experience'
                title='Your website is an extension of your brand, and I&apos;m here to help you make it the'
                actionMarkup={<Switch left='Experience' right='Education' />}
                body={<SwitchBody target='switch' body={<Experience />} switchBody={<Education />} />}
            />
            <SkillCard />
        </MainLayout>
    )
}

export default About