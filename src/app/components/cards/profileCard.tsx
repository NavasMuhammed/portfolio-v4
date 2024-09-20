'use client'
import { ButtonProvider, ImageProvider, PlaceholderImage, SvgIconProvider } from '@utils/helper'
interface ProfileCardProps {
    name?: string;
    work?: string;
    loc?: string;
}

const ProfileCard = ({ name = "Name Here ", work = 'Theme Designer at Envato', loc = "Lives in New York, USA" }: ProfileCardProps) => {
    const icons = [
        {
            link: 'https://github.com/NavasMuhammed',
            icon: <SvgIconProvider key={1} color='grey' name='gitHub' size={46} className='rounded-full' />
        },
        {
            link: 'https://www.linkedin.com/in/navas-muhammed',
            icon: <SvgIconProvider key={2} name='linkedin' size={39} className='rounded-full' />
        },
        {
            link: 'https://www.instagram.com/navas__muhammed',
            icon: <SvgIconProvider key={3} name='instagram' size={36} className='rounded-full' />
        },
        {
            link: 'https://twitter.com/NavasM34',
            icon: <SvgIconProvider key={4} name='twitter' size={36} className='rounded-full' />
        },
    ];
    const handleIconClick = (link: string) => {
        console.log('clicked')
        window.open(link, '_blank')
    }
    return (
        <div className='profile-card-container h-fit flex flex-col gap-6   xl:sticky xl:top-40 '>
            <div className="profile-card-wrapper max-w-lg p-5 rounded-3xl border bg-transparent ">
                <ImageProvider name='me2' imgStyles={{ filter: 'brightness(0.8)' }} x={230} className='rounded-3xl mb-4 w-full' />
                <div className="profile-title  w-full">
                    <span className="text-xl font-bold text-white-700 leading-8 whitespace-nowrap tracking-wider">{name}</span>
                    <div className='flex flex-col gap-4 mt-3'>
                        <span className='flex gap-3 items-start'>
                            <SvgIconProvider name='work' size={18} />
                            <span className='text-quaternary font-bold text-sm min-w-min tracking-wider'>{work}</span></span>
                        <span className='flex gap-3 items-center'>
                            <SvgIconProvider name='location' size={18} />
                            <span className='text-quaternary font-bold text-sm tracking-wider'>{loc}</span></span>
                        <hr className='hr-style my-6' />
                        <div className='flex row gap-7 '>
                            {
                                icons.map((item, index) => {
                                    return <div onClick={() => { handleIconClick(item.link) }} className={`social-icons ${item.icon.props.name}`} key={index} >
                                        {item.icon}
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <ButtonProvider title='Follow' className='self-center ml-auto fancy-hover w-full rounded-3xl p-5' /> */}
        </div>
    )
}

export default ProfileCard