import { ButtonProdiver, PlaceholderImage } from '@/app/utils/helper';
import React from 'react'

interface HeroCardProps {
    name?: string;
    work?: string;
    para?: string;
}
interface HeroHighlights {
    year: number;
    description: string;
}
const higilights: HeroHighlights[] = [
    {
        year: 10,
        description: 'YEARS EXPERIENCE'
    },
    {
        year: 100,
        description: 'CLIENTS WORLD WIDE'
    },
    {
        year: 90,
        description: 'TOTAL PROJECTS'
    },
];
const paraPlaceHolder = "My expertise lies in creating compelling user experiences for early-stage startups, achieved by establishing a strong link between the unique."
const HeroCard = ({ name = 'Andrea', work = 'Webflow Designer', para = paraPlaceHolder }: HeroCardProps) => {
    return (
        <div className='hero-card-container rounded-3xl'>
            <h2 className='hero-title text-5xl leading-[65px] font-medium mb-8'>
                <div className="line1 ">Hi I&apos;m {name},</div>
                <div className="line2 ">{work}</div>
                <PlaceholderImage x={206} y={15} className='rounded-full' />
            </h2>
            <p>{para}</p>
            <hr className='hr-style my-8' />
            <div className="hero-higilights flex gap-3">
                {higilights.map((item, index) => {
                    return <div key={index} className="engagements-num">
                        <div className='flex gap-3 items-center mb-3'>
                            <PlaceholderImage x={16.8} y={14} className='rounded' />
                            <span>{item.year}+</span>
                        </div>
                        <p className='leading-6 text-quaternary'>{item.description}</p>
                    </div>
                }
                )}
                <ButtonProdiver title='Hire Me' className='self-center ml-auto fancy-hover px-3.5 py-3 rounded-lg' />
            </div>
        </div>
    )
}

export default HeroCard