
interface SwitchComponentProps {
    Headder?: string
    title?: string
    actionMarkup?: JSX.Element
    body?: JSX.Element
}

const SwitchComponent = ({ Headder, title, actionMarkup, body }: SwitchComponentProps) => {
    return (
        <div className="experience-education-container">
            <div className="flex flex-col items-center gap-4 justify-between">
                <div className="text-4xl font-semibold">{Headder}</div>
                <div className="text-sm">{title}</div>
                {actionMarkup}
            </div>
            {body}
        </div>
    )
}

export default SwitchComponent