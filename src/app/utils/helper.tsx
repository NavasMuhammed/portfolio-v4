import Image from "next/image"; // Import the 'Image' component correctly.

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
    className?: string;
}
export const PlaceholderImage = ({ x, y = x, className }: PlaceholderImageProps): JSX.Element => {
    return (
        <Image src={`https://via.placeholder.com/${x}x${y}`} width={x} height={y} alt='profile image' className={`${className}`} />
    );
}