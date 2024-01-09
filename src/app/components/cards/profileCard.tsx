import { PlaceholderImage } from '@utils/helper'

const PorfileCard = () => {
    const icons = [
        <PlaceholderImage key={1} x={40} className='rounded-full' />,
        <PlaceholderImage key={2} x={40} className='rounded-full' />,
        <PlaceholderImage key={3} x={40} className='rounded-full' />,
        <PlaceholderImage key={4} x={40} className='rounded-full' />,
    ]
    return (
        <div className="profile-card-container p-5 rounded-3xl border bg-transparent border-gray-500 sticky top-0">
            <PlaceholderImage x={230} className='rounded-3xl mb-4' />
            <div className="profile-title">
                <span className="text-2xl font-bold text-white-700">John Doe</span>
                <div className='flex flex-col gap-2 mt-3'>
                    <span className='flex gap-2 items-center'>
                        <PlaceholderImage x={15} className='rounded' />
                        <span className='text-quaternary font-bold text-sm'>Work</span></span>
                    <span className='flex gap-2 items-center'>
                        <PlaceholderImage x={15} className='rounded' />
                        <span className='text-quaternary font-bold text-sm'>Location</span></span>
                    <hr className='my-6' />
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
    )
}

export default PorfileCard