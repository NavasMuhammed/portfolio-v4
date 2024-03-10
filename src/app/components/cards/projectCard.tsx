'use client'
import { useIntersectionObserver } from '@/app/hooks/intersectionObserver';
import { ImageProvider } from '@/app/utils/helper';
import React from 'react'
interface CardProps {
    name: string;
    title?: string;
    subTitle?: string;
    content?: string;
    id?: string;
    tag?: string;
}

export const ProjectCard = ({ name, title, subTitle, content, id, tag }: CardProps) => {
    useIntersectionObserver({
        elementSelector: `#${id}.card-container`,
        classes: {
            add: 'animate-fadeInUp',
            remove: 'invisible',
        },
        threshold: 0.3,
    });
    return (
        <div id={id} className='card-container flex flex-col gap-2 invisible relative'>
            {tag ? < div className="ribbon ">{tag}</div> : null}
            <div className="project-image-container">
                <ImageProvider x={600} name={`${name}`} className='project-image rounded-xl' />
            </div>

            <span className='mt-3 text-xl'>{title}</span>
            <span className='text-s card-subdued'>{subTitle}</span>
            <span>{content}</span>
        </div >
    )
}
