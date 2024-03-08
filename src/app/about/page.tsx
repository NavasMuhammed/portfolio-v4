import MainLayout from '@/app/layouts/mainLayout'
import SkillCard from '@components/cards/skillCard'
import SwitchComponent from '@components/switchCompoent/switchComponent'
import Switch from '@components/switchCompoent/switch'
import SwitchBody from '@components/switchCompoent/switchBody'
import Experience from '@components/experience'
import Education from '@components/Education'

const About = () => {
    return (
        <MainLayout>
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