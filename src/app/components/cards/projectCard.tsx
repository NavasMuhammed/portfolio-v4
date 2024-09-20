'use client'
import { useIntersectionObserver } from '@/app/hooks/intersectionObserver';
import { ImageProvider, SvgIconProvider } from '@/app/utils/helper';
interface CardProps {
    name: string;
    title?: string;
    subTitle?: string;
    content?: string;
    id?: string;
    tag?: string;
    handleClick?: () => void;
    tools: string[];
}

export const ProjectCard = ({ name, title, subTitle, content, id, tag, handleClick, tools }: CardProps) => {
    useIntersectionObserver({
        elementSelector: `#${id}.card-container`,
        classes: {
            add: 'animate-fadeInUp',
            remove: 'invisible',
        },
        threshold: 0.3,
    });

    //add a hover effect to the card


    return (
        <div onClick={handleClick} id={id} className='card-container flex flex-col gap-2 invisible relative'>
            {tag ? < div className="ribbon ">{tag}</div> : null}
            <div className="project-image-container">
                <ImageProvider x={600} name={`${name}`} className='project-image rounded-xl' />
            </div>

            <span className='mt-3 text-xl'>{title}</span>
            <span className='text-s card-subdued'>{subTitle}</span>
            <span>{content}</span>
            <div className='flex flex-wrap fe sm:hidden items-center justify-around gap-y-5 p-3'>
                {
                    tools.map((tool, index) => {
                        return (
                            <div className='flex items-center justify-center tools-svg' style={{ width: 96, height: 32, objectFit: 'cover' }} key={index}>
                                <SvgIconProvider name={tool} />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div >
    )
}
