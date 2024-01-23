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