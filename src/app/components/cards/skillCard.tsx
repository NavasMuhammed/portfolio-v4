import React from 'react'
import ProgressComponent from '../progressComponent'

const SkillCard = () => {
    return (
        <div className="skill-card-container relative xl:sticky xl:top-40 w-full h-max rounded-3xl  p-5 xl:p-8">
            <div className="skill-card-title font-semibold text-2xl ">Top Skills</div>
            <div className="flex flex-col mt-5 gap-6">
                <ProgressComponent title='JavaScript' duration={2000} progress={80} classNameProgress='yellow-gradient' />
                <ProgressComponent title='NodeJs' duration={2000} progress={75} classNameProgress='purple-gradient' />
                <ProgressComponent title='HTML' duration={2000} progress={100} classNameProgress='orange-gradient' />
                <ProgressComponent title='CSS' duration={2000} progress={100} classNameProgress='blue-gradient' />
                <ProgressComponent title='MongoDB' duration={2000} progress={70} classNameProgress='dark-green-gradient' />
                <ProgressComponent title='React' duration={2000} progress={80} classNameProgress='dark-gradient-purple' />
                <ProgressComponent title='ExpressJs' duration={2000} progress={75} classNameProgress='dark-pink-gradient' />
            </div>
        </div>
    )
}

export default SkillCard