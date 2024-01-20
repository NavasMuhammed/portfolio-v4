import React from 'react'
import ProgressComponent from '../progressComponent'
import { progressDataProvider } from '@/app/data/commonDataProvider'


const SkillCard = () => {

    return (
        <div className="skill-card-container relative xl:sticky xl:top-40 w-full h-max rounded-3xl  p-5 xl:p-8">
            <div className="skill-card-title font-semibold text-2xl ">Top Skills</div>
            <div className="flex flex-col mt-5 gap-6">
                {
                    progressDataProvider.map((item, index) => {
                        return <ProgressComponent key={index} title={item.title} duration={item.duration} progress={item.progress} classNameProgress={item.classNameProgress} />
                    })
                }
            </div>
        </div>
    )
}

export default SkillCard