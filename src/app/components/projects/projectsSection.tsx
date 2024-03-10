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
            content: 'Formarly a React app smoothly transitioned to a Shopify embedded app, then evolved into a custom Next.js template.Prisma optimized database operations, while Docker streamlined deployment.Hosted on DigitalOcean, the solution ensured scalability and robust infrastructure, meeting modern development standards.'
        },
        {
            id: 'project-ufe',
            name: 'ufe',
            tag: '100M+ Boosted',
            title: 'Upsell Funnel Engine',
            subTitle: 'Helixo innovations pvt ltd',
            content: "App that empowered Shopify merchants to generate an additional revenue of $100M. My contributions span both front-end and back-end development, where I crafted several components and developed multiple APIs, Implemented a standout feature enabling automatic free gift distribution, alongside a theme selector with preview functionality."
        },
        {
            id: 'project-hue',
            name: 'hue',
            tag: 'Next Js 🔥',
            title: 'Hue Company Website',
            subTitle: 'Hue.Company',
            content: 'Developed official website for Hue Company using Next.js. The website is fully responsive and has a modern design. Implemented various features like contact form, blog section, and career page.'
        },
        {
            id: 'projects-remix',
            name: 'custom-carrier-rates',
            tag: 'Remix 💿',
            title: 'Custom Carrier Rates',
            subTitle: 'Personal Project',
            content: 'Developed a custom carrier rates app for Shopify merchants. The app allows merchants to create custom shipping rates based on various conditions postal code. The app is built using Remix and Tailwind CSS. The app is hosted on Vercel.'
        },
    ]

    return (
        <div className='flex mt-20 flex-wrap gap-8 sm:gap-0 '>
            <div className='flex gap-6 flex-col flex-1 min-w-96  sm:sticky top-64 h-fit'>
                <span className='text-xl sm:text-2xl'>Projects I have worked on</span>
                <span className='hidden sm:block sm:text-5xl sm:leading-normal'>Does More Then Ever
                    Platform To Achieve Goal
                    Stages.</span>
                <ButtonProdiver title='Resume' className='hidden sm:flex m-0 w-max fancy-hover px-3.5 py-3 h-fit rounded-xl sm:mr-0 ' />

            </div>
            <div className='flex flex-wrap flex-1 gap-6'>
                {projects.map((project) => {
                    return <ProjectCard key={project.id} {...project} />
                })}
            </div>

        </div>
    )
}

