'use client'
import React, { useEffect, useState } from 'react'

interface SwitchProps {
    onChange?: () => void,
    left: string,
    right: string
}

const Switch = ({ onChange, left, right }: SwitchProps) => {
    const [isChecked, setIsChecked] = useState(false)
    useEffect(() => {
        const handleSwitchChange = () => {
            setIsChecked(!isChecked);
        };

        const switchInputValue = document.getElementById('switch') as HTMLInputElement;
        switchInputValue.addEventListener('change', handleSwitchChange);
    }, [isChecked])
    return (
        <div className="switcher flex items-center gap-2">
            <h1 className={`${isChecked ? 'switcher-disabled' : ''}`}>{left}</h1>
            <input type="checkbox" id="switch" onChange={onChange} />
            <label htmlFor="switch">Toggle</label>
            <h1 className={`${!isChecked ? 'switcher-disabled' : ''}`}>{right}</h1>
        </div>
    );
};

export default Switch