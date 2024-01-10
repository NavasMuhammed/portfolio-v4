import { ButtonProdiver, PlaceholderImage } from '@utils/helper'


interface PorfileCardProps {
    name?: string;
    work?: string;
    loc?: string;
}

const PorfileCard = ({ name = "Andrea E. Harper", work = 'Theme Designer at Envato', loc = "Lives in New York, USA" }: PorfileCardProps) => {
    const icons = [
        <PlaceholderImage key={1} x={40} className='rounded-full' />,
        <PlaceholderImage key={2} x={40} className='rounded-full' />,
        <PlaceholderImage key={3} x={40} className='rounded-full' />,
        <PlaceholderImage key={4} x={40} className='rounded-full' />,
    ]
    return (
        <div className='flex flex-col gap-6'>
            <div className="profile-card-container h-max  p-5 rounded-3xl border bg-transparent border-gray-500 sticky ">
                <PlaceholderImage x={230} className='rounded-3xl mb-4 w-full' />
                <div className="profile-title">
                    <span className="text-xl font-bold text-white-700 leading-8 whitespace-nowrap">{name}</span>
                    <div className='flex flex-col gap-2 mt-3'>
                        <span className='flex gap-2 items-center'>
                            <PlaceholderImage x={15} className='rounded' />
                            <span className='text-quaternary font-bold text-sm w-max'>{work}</span></span>
                        <span className='flex gap-2 items-center'>
                            <PlaceholderImage x={15} className='rounded' />
                            <span className='text-quaternary font-bold text-sm'>{loc}</span></span>
                        <hr className='hr-style my-6' />
                        <div className='flex row gap-5 '>
                            {
                                icons.map((item, index) => {
                                    return <div key={index} >
                                        {item}
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <ButtonProdiver title='Follow' className='self-center ml-auto fancy-hover w-full rounded-3xl p-5 ' />
            <ButtonProdiver title='Follow' className='self-center ml-auto fancy-hover w-full rounded-3xl p-5' />
        </div>
    )
}

export default PorfileCard