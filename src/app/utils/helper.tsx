import Image from "next/image"; // Import the 'Image' component correctly.
import { ReactNode } from "react";
import { DefaultIcon, DigitalOceanIcon, DockerIcon, ExpressIcon, GearIcon, GitHubIcon, GraphqlIcon, HeroShape, InstagramIcon, LinkedinIcon, LocationIcon, LogoIcon, MongoDBIcon, MuiIcon, NextJsIcon, NodeJsIcon, PrismaIcon, ReactIcon, RemixIcon, ShopifyIcon, SuitCaseIcon, SupabaseIcon, TailwindIcon, TickIcon, TwitterIcon, VercelIcon, ViteIcon } from "./constants";

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
        case 'GraphQL':
            return (
                <GraphqlIcon className="animate-popup graphql-svg" color={color} size={size} onClick={onClick} />
            )
        case 'TailwindCss':
            return (
                <TailwindIcon className="animate-popup tailwind-svg" color={color} size={size} onClick={onClick} />
            )
        case 'Supabase':
            return (
                <SupabaseIcon className="animate-popup supabase-svg" color={color} size={size} onClick={onClick} />
            )
        case 'ViteJs':
            return (
                <ViteIcon className="animate-popup vite-js-svg" color={color} size={size} onClick={onClick} />
            )
        case 'MongoDB':
            return (
                <MongoDBIcon className="animate-popup mongo-db-svg" color={color} size={size} onClick={onClick} />
            )
        case 'MUI':
            return (
                <MuiIcon className="animate-popup mui-svg" color={color} size={size} onClick={onClick} />
            )
        case 'Remix':
            return (
                <RemixIcon className="animate-popup remix-svg" color={color} size={size} onClick={onClick} />
            )
        case 'NodeJs':
            return (
                <NodeJsIcon className="animate-popup node-js-svg" color={color} size={size} onClick={onClick} />
            )
        case 'Express':
            return (
                <ExpressIcon className="animate-popup express-svg" color={color} size={size} onClick={onClick} />
            )
        case 'Shopify':
            return (
                <ShopifyIcon className="animate-popup digital-ocean-svg" color={color} size={size} onClick={onClick} />
            )
        case 'DigitalOcean':
            return (
                <DigitalOceanIcon className="animate-popup digital-ocean-svg" color={color} size={size} onClick={onClick} />
            )
        case 'Docker':
            return (
                <DockerIcon className="animate-popup docker-svg" color={color} size={size} onClick={onClick} />
            )
        case 'Prisma':
            return (
                <PrismaIcon className="animate-popup vercel-svg" color={color} size={size} onClick={onClick} />
            )
        case 'NextJs':
            return (
                <NextJsIcon className="animate-popup vercel-svg" color={color} size={size} onClick={onClick} />
            )
        case 'Vercel':
            return (
                <VercelIcon className="animate-popup vercel-svg" color={color} size={size} onClick={onClick} />
            )
        case 'React':
            return (
                <ReactIcon className="animate-popup react-svg" color={color} size={size} onClick={onClick} />
            )
        case 'logo':
            return (
                <LogoIcon className="logo-svg" color={color} size={size} onClick={onClick} />
            )
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