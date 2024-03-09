import { useIntersectionObserver } from "@/app/hooks/intersectionObserver"

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
                <div className="text-2xl font-semibold text-center sm:text-4xl">{Headder}</div>
                <div className="text-sm hidden sm:block">{title}</div>
                {actionMarkup}
            </div>
            {body}
        </div>
    )
}

export default SwitchComponent