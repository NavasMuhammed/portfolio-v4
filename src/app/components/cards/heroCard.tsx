'use client'
import { useIntersectionObserver } from '@/app/hooks/intersectionObserver';
import { ButtonProdiver, PlaceholderImage } from '@/app/utils/helper';

interface HeroCardProps {
    name?: string;
    work?: string;
    para?: string;
    hero?: boolean;
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
const HeroCard = ({ name = 'Name', work = 'Webflow Designer', para = paraPlaceHolder, hero = true }: HeroCardProps) => {

    useIntersectionObserver({
        elementSelector: '.hero-card-container',
        classes: {
            add: 'animate-fadeInUp',
            remove: 'invisible',
        },
        threshold: 0.3,
    });


    return (
        <div className='hero-card-container p-5 lg:p-8 rounded-3xl invisible'>
            <h2 className='hero-title mb-4 text-2xl lg:text-5xl lg:leading-[65px] font-medium lg:mb-8'>
                <div className="line1 ">Hi I&apos;m {name},</div>
                <div className="line2 ">{work}</div>
                <PlaceholderImage x={206} y={15} className='rounded-full' />
            </h2>
            <p>{para}</p>
            <hr className='hr-style my-8' />
            {hero && <div className="flex-wrap lg:flex-nowrap  flex  gap-3 hero-higilights">
                {higilights.map((item, index) => {
                    return <div key={index} className="engagements-num">
                        <div className='flex gap-3 items-center mb-3'>
                            <PlaceholderImage x={16.8} y={14} className='rounded' />
                            <span>{item.year}+</span>
                        </div>
                        <p className='leading-6 text-quaternary text-sm font-semibold w-max'>{item.description}</p>
                    </div>
                }
                )}
                <ButtonProdiver title='Hire Me' className='ml-auto w-max fancy-hover px-3.5 py-3 h-fit rounded-xl sm:mr-0' />
            </div>}
        </div >
    )
}

export default HeroCard