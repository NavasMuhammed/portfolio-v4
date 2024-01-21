import { useEffect } from "react";

type Props = {}

export const ThemeSettings = (props: Props) => {

    const handleClick = () => {
        const root = document.querySelector(':root') as HTMLElement;
        root.style.setProperty('--foreground-rgb', '#484b6a');
        root.style.setProperty('--background-color', '#e4e5f1');
        root.style.setProperty('--dark-card-shade', '#9394a5');
        root.style.setProperty('--dark-card-shade-end', '#e4e5f1');
        root.style.setProperty('--gear-icon', '#484b6a');
        root.style.setProperty('--theme-bg)', '#fafafa');
        root.style.setProperty('--border-dark', '#9394a5');

    }



    return (
        <div className="flex flex-col justify-start">
            <span>ThemeSettings</span>
            <button className="button-primary" onClick={handleClick}>clickme</button>

        </div>
    )
}