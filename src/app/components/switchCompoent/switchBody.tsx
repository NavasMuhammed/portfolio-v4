'use client'
import React, { useEffect, useState } from 'react'

interface SwitchBodyProps {
    body: JSX.Element,
    switchBody: JSX.Element
    target?: string
}

const SwitchBody = ({ body, switchBody, target }: SwitchBodyProps) => {
    const [isChecked, setIsChecked] = useState(false)
    useEffect(() => {
        const handleSwitchChange = () => {
            setIsChecked(!isChecked);
        };

        const switchInputValue = document.getElementById(`${target}`) as HTMLInputElement;
        switchInputValue.addEventListener('change', handleSwitchChange);
        // setIsChecked(switchValue)
    }, [isChecked, target])

    return (
        <div>
            {!isChecked ? body : switchBody}
        </div>
    )
}

export default SwitchBody