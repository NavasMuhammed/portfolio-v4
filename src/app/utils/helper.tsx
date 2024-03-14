import Image from "next/image"; // Import the 'Image' component correctly.
import { ReactNode } from "react";
import { DefaultIcon, GearIcon, GitHubIcon, HeroShape, InstagramIcon, LinkedinIcon, LocationIcon, SuitCaseIcon, TickIcon, TwitterIcon } from "./constants";

/**
 * Renders a placeholder image with the specified dimensions.
 *
 * @param {Object} props - The props object.
 * @param {number} props.x - The width of the image.
 * @param {number} [props.y=x] - The height of the image. Defaults to the value of `x`.
 * @returns {JSX.Element} The rendered placeholder image component.
 */
interface PlaceholderImageProps {
    x: number;
    y?: number;
    name?: string;
    className?: string;
    imgStyles?: React.CSSProperties;
}
export const PlaceholderImage = ({ x, y = x, className }: PlaceholderImageProps): JSX.Element => {
    return (
        <Image src={`https://via.placeholder.com/${x}x${y}`} width={x} height={y} alt='profile image' className={`${className}`} />
    );
}
export const ImageProvider = ({ name, x, y = x, className, imgStyles }: PlaceholderImageProps): JSX.Element => {
    return (
        <Image style={{ ...imgStyles }} src={`/assets/images/${name}.jpg`} width={x} height={y} alt='image' className={`${className}`} />
    );
}

interface ButtonProdiverProps {
    title?: string;
    icon?: ReactNode;
    className?: string;
    link?: string;
}

const iconPlaceHolder = <div>🔗</div>

export const ButtonProdiver = ({ title = "button", icon = iconPlaceHolder, className = '', link = "" }: ButtonProdiverProps) => {
    const handleClick = () => {
        if (link !== "") {
            window.open(link, '_blank')
        }
    }
    return (
        <div onClick={handleClick} className={`button-primary flex flex-row gap-3 ${className}`}>
            <button className='font-normal   '>{title}</button>
            <button className='btn-secondary'>{icon}</button>
        </div>
    )
}

interface SvgIconProvider {
    name?: string;
    color?: string;
    size?: number;
    onClick?: () => void;
    className?: string;
}

export const SvgIconProvider = ({ name, color = '', size = 24, onClick }: SvgIconProvider) => {
    switch (name) {
        case 'gear':
            return (
                <GearIcon className="gear-svg" color={color} size={size} onClick={onClick} />
            )

        case 'heroShape':
            return (
                <HeroShape className='hero-shape-svg' color={color} size={size} />
            )

        case 'tickShape':
            return (
                <TickIcon className="hero-shape-svg" color={color} size={size} onClick={onClick} />
            )

        case 'work':
            return (
                <SuitCaseIcon className="suit-case-svg" color={color} size={size} onClick={onClick} />
            )

        case 'location':
            return (
                <LocationIcon className="location-svg" color={color} size={size} onClick={onClick} />
            )
        case 'gitHub':
            return (
                <GitHubIcon className="gitHub-svg" color={color} size={size} onClick={onClick} />
            )
        case 'linkedin':
            return (
                <LinkedinIcon className="linkedin-svg" color={color} size={size} onClick={onClick} />
            )
        case 'instagram':
            return (
                <InstagramIcon className="instagram-svg" color={color} size={size} onClick={onClick} />
            )
        case 'twitter':
            return (
                <TwitterIcon className="twitter-svg" color={color} size={size} onClick={onClick} />
            )

        default:
            return (
                <DefaultIcon color={color} size={size} onClick={onClick} />
            )

    }
}