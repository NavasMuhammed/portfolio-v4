'use client'

import { useEffect, useMemo, useState } from "react";

type Theme = 'Dark' | 'Light';
type ThemeProperties = {
    '--foreground-color': string;
    '--background-color': string;
    '--dark-card-shade': string;
    '--dark-card-shade-end': string;
    '--gear-icon': string;
    '--theme-bg': string;
    '--border-dark': string;
}

type Props = {}

export const ThemeSettings = (props: Props) => {



    const themeProvider = useMemo(() => {
        return {
            Dark: {
                '--foreground-color': '#ffffff',
                '--background-color': '#0f0f0f',
                '--dark-card-shade': '#262626',
                '--dark-card-shade-end': '#2626261a',
                '--gear-icon': '#ffffff',
                '--theme-bg': '#0f0f0f',
                '--border-dark': '#242424'
            },
            Light: {
                '--foreground-color': '#484b6a',
                '--background-color': '#e4e5f1',
                '--dark-card-shade': '#9394a5',
                '--dark-card-shade-end': '#e4e5f1',
                '--gear-icon': '#484b6a',
                '--theme-bg': '#fafafa',
                '--border-dark': '#9394a5'
            },
            Dracula: {
                '--foreground-color': '#f8f8f2',
                '--background-color': '#282a36',
                '--dark-card-shade': '#44475a',
                '--dark-card-shade-end': '#282a36',
                '--gear-icon': '#f8f8f2',
                '--theme-bg': '#282a36',
                '--border-dark': '#44475a'
            }
        };
    }, []);


    const [SelectedTheme, setSelectedTheme] = useState('')
    useEffect(() => {
        const theme = localStorage.getItem('theme') as Theme;
        setSelectedTheme(theme)
        //get the theme from local storage
        if (theme) {
            const root = document.querySelector(':root') as HTMLElement;
            const themeProperties = themeProvider[theme];
            for (let property in themeProperties) {
                root.style.setProperty(property, themeProperties[property as keyof ThemeProperties]);
            }
        }
    }, [themeProvider])


    const handleClick = (theme: Theme, e: React.MouseEvent<HTMLButtonElement>) => {
        document.body.classList.toggle('settings-open')
        //store the theme in local storage
        localStorage.setItem('theme', theme);
        setSelectedTheme(theme)
        const root = document.querySelector(':root') as HTMLElement;
        const themeProperties = themeProvider[theme];
        for (let property in themeProperties) {
            root.style.setProperty(property, themeProperties[property as keyof ThemeProperties]);
        }
    }

    return (
        <div className="flex gap-6 flex-col justify-start">
            <span className="text-xl sm:text-sm">ThemeSettings</span>
            <div className="flex gap-7 flex-wrap">
                {
                    Object.keys(themeProvider).map((theme, index) => {
                        return (
                            <div key={index}>
                                <button className="w-14 h-14 rounded-xl"
                                    value={theme}
                                    style={{
                                        background: themeProvider[theme as Theme]['--background-color'],
                                        boxShadow: `0 0 0 2px ${themeProvider[theme as Theme]['--border-dark']}`,
                                        border: `${SelectedTheme === theme ? '2px solid #fff' : 'none'}`
                                    }}
                                    onClick={(e) => handleClick(theme as Theme, e)}>
                                    <span className="text-xs" style={{ color: `${themeProvider[theme as Theme]['--foreground-color']}` }}>{theme}</span>

                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}