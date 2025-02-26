'use client'
import { ButtonProvider } from '@/app/utils/helper'
import { ProjectCard } from '@components/cards/projectCard'
import Tools from '../toolsComponent'
import { projects } from '@/app/utils/constants'

export const ProjectsSection = () => {


    const handleClick = (link: string) => {
        console.log('clicked')
        window.open(link, '_blank')
    }




    return (
        <div className='flex mt-20 flex-wrap gap-8 sm:gap-0 max-w-[2160px] m-auto'>
            <div className='flex gap-6 flex-col flex-1 min-w-96  sm:sticky top-56 h-fit'>
                <span className='text-xl sm:text-2xl'>Projects I have worked on</span>
                {/* <span className='hidden sm:block sm:text-5xl sm:leading-normal'>Does More Then Ever
                    Platform To Achieve Goal
                    Stages.</span> */}
                <div className='pb-12 hidden sm:block'>
                    <Tools />
                </div>
                {/* <ButtonProvider link='https://www.canva.com/design/DAE4gakUnqs/VgJBFKzuM05-ySZIepAy4w/edit?utm_content=DAE4gakUnqs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' title='Resume' className='hidden sm:flex m-0 w-max fancy-hover px-3.5 py-3 h-fit rounded-xl sm:mr-0 ' /> */}

            </div>
            <div className='flex flex-wrap flex-1 gap-6 justify-center'>
                {projects.map((project) => {
                    return <ProjectCard handleClick={() => { handleClick(project.link) }} key={project.id} {...project} />
                })}
            </div>

        </div>
    )
}

