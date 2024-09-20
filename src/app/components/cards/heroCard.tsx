'use client'
import { useIntersectionObserver } from '@/app/hooks/intersectionObserver';
import { ButtonProvider, SvgIconProvider } from '@/app/utils/helper';

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
const highlights: HeroHighlights[] = [
    {
        year: 2,
        description: 'YEARS EXPERIENCE'
    },
    {
        year: 5,
        description: 'CLIENTS WORLD WIDE'
    },
    {
        year: 15,
        description: 'TOTAL PROJECTS'
    },
];
const paraPlaceHolder = "Specializing in engaging user experiences for startups, I leverage full-stack and Shopify app development to connect unique identities with audiences for impactful growth."
const HeroCard = ({ name = 'Name', work = 'Webfoot Designer', para = paraPlaceHolder, hero = true }: HeroCardProps) => {

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
                <SvgIconProvider name='heroShape' size={200} />
            </h2>
            <p className='font-medium'>{para}</p>
            <hr className='hr-style my-8' />
            {hero && <div className="flex-wrap lg:flex-nowrap  flex  gap-3 hero-highlights">
                {highlights.map((item, index) => {
                    return <div key={index} className="engagements-num">
                        <div className='flex gap-3 items-center mb-3'>
                            <SvgIconProvider name='tickShape' size={20} />
                            <span>{item.year}+</span>
                        </div>
                        <p className='leading-6 text-quaternary text-sm font-semibold w-max'>{item.description}</p>
                    </div>
                }
                )}
                <ButtonProvider link='https://drive.google.com/file/d/11uhB9fXiVCZuVbuLm3TKassnrePgQx-b/view?usp=sharing' title='Resume' className='ml-auto w-max fancy-hover px-3.5 py-3 h-fit rounded-xl sm:mr-0' />
            </div>}
        </div >
    )
}

export default HeroCard