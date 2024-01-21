import React from 'react'
import { ThemeSettings } from './themeSettings'

type Props = {}

const SettingsPanel = (props: Props) => {
    return (
        <div className="settings-panel absolute top-0 ">
            <div className="panel-container sticky top-12">
                <ThemeSettings />
            </div>
        </div>
    )
}

export default SettingsPanel