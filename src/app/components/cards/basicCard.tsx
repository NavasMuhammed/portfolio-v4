'use client'
import { useIntersectionObserver } from '@/app/hooks/intersectionObserver';
import React from 'react'
interface CardProps {
    year?: {
        start?: string;
        end?: string;
    };
    title?: string;
    subTitle?: string;
    content?: string;
    id?: string;
}

export const Card = ({ year, title, subTitle, content, id }: CardProps) => {
    useIntersectionObserver({
        elementSelector: `#${id}.card-container`,
        classes: {
            add: 'animate-fadeInUp',
            remove: 'invisible',
        },
        threshold: 0.3,
    });
    return (
        <div id={id} className='card-container flex flex-col gap-2 invisible'>
            <div className="year-span">
                <span>{year?.start}</span>
                <span> - </span>
                <span>{year?.end}</span>
            </div>
            <span className='mt-3 text-xl'>{title}</span>
            <span className='text-s card-subdued'>{subTitle}</span>
            <span>{content}</span>
        </div>
    )
}
