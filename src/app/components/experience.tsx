import React from 'react'
import { Card } from './cards/basicCard'

const experience = [
    {
        year: { start: '2023', end: 'Present' },
        title: 'Full Stack | Shopify Developer',
        subTitle: 'Helixo innovations pvt ltd',
        content: 'Joined as a full stack developer and later moved to Shopify development team. Worked on multiple projects and developed custom apps for shopify stores. Also worked on multiple headless shopify projects.'
    },
    {
        year: { start: '2022', end: '2023' },
        title: 'Frontend Developer',
        subTitle: 'Freelance',
        content: 'Worked as a freelance developer at a web3 startup. Developed client dashboards of a decentralized finance management system.'
    },
    {
        year: { start: '2019', end: '2023' },
        title: 'React Developer | Internship',
        subTitle: 'XcitEducation Worldwide',
        content: 'Joined as a React developer intern and worked on a project where I developed frontend of a internshala like platform for students.'
    }
]

const Experience = () => {
    return (
        <div className='flex flex-wrap gap-3 mt-3 mb-5'>
            {experience.map((exp, index) => (
                <Card key={index} year={exp.year} title={exp.title} subTitle={exp.subTitle} content={exp.content} />
            ))}
        </div>
    )
}

export default Experience