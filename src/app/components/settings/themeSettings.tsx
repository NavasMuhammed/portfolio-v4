'use client'

type Theme = 'light' | 'dark';
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


    const themeProvider = {
        light: {
            '--foreground-color': '#484b6a',
            '--background-color': '#e4e5f1',
            '--dark-card-shade': '#9394a5',
            '--dark-card-shade-end': '#e4e5f1',
            '--gear-icon': '#484b6a',
            '--theme-bg': '#fafafa',
            '--border-dark': '#9394a5'
        },
        dark: {
            '--foreground-color': '#ffffff',
            '--background-color': '#0f0f0f',
            '--dark-card-shade': '#262626',
            '--dark-card-shade-end': '#2626261a',
            '--gear-icon': '#ffffff',
            '--theme-bg': '#0f0f0f',
            '--border-dark': '#242424'
        },
        dracula: {
            '--foreground-color': '#f8f8f2',
            '--background-color': '#282a36',
            '--dark-card-shade': '#44475a',
            '--dark-card-shade-end': '#282a36',
            '--gear-icon': '#f8f8f2',
            '--theme-bg': '#282a36',
            '--border-dark': '#44475a'
        },
        solarizedDark: {
            '--foreground-color': '#839496',
            '--background-color': '#002b36',
            '--dark-card-shade': '#073642',
            '--dark-card-shade-end': '#002b36',
            '--gear-icon': '#839496',
            '--theme-bg': '#002b36',
            '--border-dark': '#073642'
        },
        nord: {
            '--foreground-color': '#d8dee9',
            '--background-color': '#2e3440',
            '--dark-card-shade': '#4c566a',
            '--dark-card-shade-end': '#2e3440',
            '--gear-icon': '#d8dee9',
            '--theme-bg': '#3b4252',
            '--border-dark': '#4c566a'
        },
        materialDark: {
            '--foreground-color': '#ffffff',
            '--background-color': '#121212',
            '--dark-card-shade': '#1e1e1e',
            '--dark-card-shade-end': '#121212',
            '--gear-icon': '#ffffff',
            '--theme-bg': '#121212',
            '--border-dark': '#1e1e1e'
        },
        oceanicNext: {
            '--foreground-color': '#c0c5ce',
            '--background-color': '#1b2b34',
            '--dark-card-shade': '#343d46',
            '--dark-card-shade-end': '#1b2b34',
            '--gear-icon': '#c0c5ce',
            '--theme-bg': '#1b2b34',
            '--border-dark': '#343d46'
        },
        monokai: {
            '--foreground-color': '#f8f8f2',
            '--background-color': '#272822',
            '--dark-card-shade': '#49483e',
            '--dark-card-shade-end': '#272822',
            '--gear-icon': '#f8f8f2',
            '--theme-bg': '#272822',
            '--border-dark': '#49483e'
        }
    }

    const handleClick = (theme: Theme) => {
        const root = document.querySelector(':root') as HTMLElement;
        const themeProperties = themeProvider[theme];
        for (let property in themeProperties) {
            root.style.setProperty(property, themeProperties[property as keyof ThemeProperties]);
        }
    }

    return (
        <div className="flex gap-2 flex-col justify-start">
            <span>ThemeSettings</span>
            <div className="flex gap-3 flex-wrap">
                {
                    Object.keys(themeProvider).map((theme, index) => {
                        return (
                            <button className="w-14 h-14 rounded-xl"
                                style={{
                                    background: themeProvider[theme as Theme]['--background-color'],
                                    boxShadow: `0 0 0 2px ${themeProvider[theme as Theme]['--border-dark']}`,
                                }}
                                key={index} onClick={() => handleClick(theme as Theme)}>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}