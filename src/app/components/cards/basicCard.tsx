import React from 'react'

interface CardProps {
    year?: {
        start?: string;
        end?: string;
    };
    title?: string;
    subTitle?: string;
    content?: string;
}

export const Card = ({ year, title, subTitle, content }: CardProps) => {
    return (
        <div className='card-container flex flex-col gap-2'>
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
