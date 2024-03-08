import React from 'react'
import { Card } from './cards/basicCard'

const experience = [
    {
        year: { start: '2019', end: '2023' },
        title: 'B.Tech',
        subTitle: 'Cochin University of Science and Technology',
        content: 'Completed my BTech in Information Technology and Engineering from Cochin University of Science and Technology, Kerala, India with distinction and a CGPA of 8.1 .'
    },
    {
        year: { start: '2016', end: '2018' },
        title: 'Higher Secondary',
        subTitle: 'Malabar special police Higher Secondary School',
        content: 'Completed my Higher Secondary Education from  MSP HSS, Malappuram, Kerala with a score of 83%'
    },
    {
        year: { start: '2012', end: '2016' },
        title: 'High School',
        subTitle: 'MMET High School',
        content: 'Completed my Secondary School Education from Government High School MMET, Malappuram, Kerala with distinction and a score of 98%'
    },

]

const Education = () => {
    return (
        <div className='flex flex-wrap gap-3 mt-3 mb-5'>
            {experience.map((exp, index) => (
                <Card key={index} year={exp.year} title={exp.title} subTitle={exp.subTitle} content={exp.content} />
            ))}
        </div>
    )
}

export default Education