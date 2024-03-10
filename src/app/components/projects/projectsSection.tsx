import { ButtonProdiver } from '@/app/utils/helper'
import { ProjectCard } from '@components/cards/projectCard'

export const ProjectsSection = () => {
    const projects = [
        {
            id: 'project-bucks',
            name: 'bucks',
            tag: '#2 at shopify',
            title: 'Bucks Currency converter',
            subTitle: 'Helixo innovations pvt ltd',
            content: 'Joined as a full stack developer and later moved to Shopify development team. Worked on multiple projects and developed custom apps for shopify stores. Also worked on multiple headless shopify projects.'
        },
        {
            id: 'project-ufe',
            name: 'ufe',
            tag: '100M+ Boosted',
            title: 'Upsell Funnel Engine',
            subTitle: 'Helixo innovations pvt ltd',
            content: 'Developed a fully functional ecommerce store using Shopify platform. Implemented various features like product listing, cart functionality, payment integration, and order management.'
        },
        {
            id: 'project-hue',
            name: 'hue',
            tag: 'Next Js 🔥',
            title: 'Hue Company Website',
            subTitle: 'Hue.Company',
            content: 'Developed a fully functional ecommerce store using Shopify platform. Implemented various features like product listing, cart functionality, payment integration, and order management.'
        },
        {
            id: 'projects-remix',
            name: 'custom-carrier-rates',
            tag: 'Remix 💿',
            title: 'Custom Carrier Rates',
            subTitle: 'Personal Project',
            content: 'Developed a fully functional ecommerce store using Shopify platform. Implemented various features like product listing, cart functionality, payment integration, and order management.'
        },
    ]

    return (
        <div className='flex mt-20 flex-wrap gap-8 sm:gap-0 '>
            <div className='flex gap-6 flex-col flex-1 min-w-96  sm:sticky top-64 h-fit'>
                <span className='text-xl sm:text-2xl'>Projects I have worked on</span>
                <span className='hidden sm:block sm:text-5xl sm:leading-normal'>Does More Then Ever
                    Platform To Achieve Goal
                    Stages.</span>
                <ButtonProdiver title='Hire Me' className='hidden sm:block m-0 w-max fancy-hover px-3.5 py-3 h-fit rounded-xl sm:mr-0' />

            </div>
            <div className='flex flex-wrap flex-1 gap-6'>
                {projects.map((project) => {
                    return <ProjectCard key={project.id} {...project} />
                })}
            </div>

        </div>
    )
}

