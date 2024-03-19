import { useEffect, useState } from 'react';
import { SvgIconProvider } from '../utils/helper';
import { projects } from '../utils/constants';
// import { projects } from '../utils/constants'

interface Project {
    id: string;
    name: string;
    tag: string;
    title: string;
    subTitle: string;
    content: string;
    link: string;
    tools: string[];
}

// const projects: Project[] = [
//     {
//         id: 'project-bucks',
//         name: 'bucks',
//         tools: ['NextJs', 'Shopify', 'Prisma', 'MongoDB', 'Docker', 'DigitalOcean']
//     },
//     {
//         id: 'project-ufe',
//         name: 'ufe',
//         tools: ['React', 'Shopify', 'Express', 'NodeJs', 'MongoDB', 'Docker', 'DigitalOcean']
//     },
//     {
//         id: 'project-hue',
//         name: 'hue',
//         tools: ['NextJs', 'Vercel', 'TailwindCss']
//     },
//     {
//         id: 'projects-remix',
//         name: 'custom-carrier-rates',
//         tools: ['Shopify', 'Remix', 'Vercel', "Prisma", 'Supabase']
//     },
//     {
//         id: 'vacation-rental',
//         name: 'travelogue',
//         tools: ['React', 'Vercel', 'MUI', 'ViteJs']
//     }
// ]
const Tools = () => {
    const [intersectingProject, setIntersectingProject] = useState<Project | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const project = projects.find((project: Project) => project.id === entry.target.id);
                        if (project) {
                            setIntersectingProject(project);
                        }
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        projects.forEach((project: Project) => {
            const element = document.querySelector(`#${project.id}`);
            if (element) observer.observe(element);
        });

        // Clean up the observer when the component unmounts
        return () => {
            projects.forEach((project: Project) => {
                const element = document.querySelector(`#${project.id}`);
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    console.log(intersectingProject);


    return (
        <div className='flex flex-row  sm:flex-col gap-7'>
            <span className='hidden sm:block text-lg'>Tools used for development </span>
            <div className='flex gap-3 gap-y-7 flex-wrap pr-100'>
                {
                    intersectingProject?.tools.map((tool, index) => {
                        return (
                            <div className='flex items-center justify-center tools-svg' style={{ width: 126, height: 48, objectFit: 'cover' }} key={index}>
                                <SvgIconProvider name={tool} />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Tools