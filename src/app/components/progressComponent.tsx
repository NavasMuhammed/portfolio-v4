'use client'
import React, { useEffect, useState, useRef } from 'react'

interface ProgressComponentProps {
    className?: string
    title?: string
    progress: number
    duration: number
    classNameProgress?: string
}

const ProgressComponent = ({ className = '', title, progress, duration, classNameProgress, }: ProgressComponentProps) => {

    const [progressWidth, setProgressWidth] = useState(0);
    const progressRef = useRef(null)
    useEffect(() => {
        const currentNode = progressRef.current
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const startTime = Date.now();

                const animate = () => {
                    const now = Date.now();
                    const time = Math.min(1, ((now - startTime) / duration));
                    let mutableTime = time;
                    const timeFunction = (--mutableTime) * mutableTime * mutableTime + 1; // cubic ease out function

                    setProgressWidth(progress * timeFunction);

                    if (time < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
            }
        }, { threshold: 0.5 });

        if (currentNode) {
            observer.observe(currentNode);
        }

        return () => {
            if (currentNode) {
                observer.unobserve(currentNode);
            }
        };
    }, [progress, duration]);
    return (
        <div className={`${className}`} ref={progressRef}>
            <div className="progress-bar flex flex-col gap-3 justify-between">
                <div className='flex justify-between'>
                    <div className="progress-title text-sm">{title}</div>
                    <div className="progress-cont float-end">{`${Math.floor(progressWidth)}%`}</div>
                </div>
                <div className='bg-progress-bg h-0.5 rounded-sm'>
                    <div className={`progress h-1 rounded-sm bg-slate-50 ${classNameProgress} `} style={{ width: `${progressWidth}%` }}></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressComponent