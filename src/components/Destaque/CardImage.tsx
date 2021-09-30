import './style.scss';

interface CardImageProps {
  image: string;
  alt: string;
}

export const CardImage = ({image, alt}: CardImageProps) => {
  return (
    <div className="card">
      <img src={image} alt={alt} />
    </div>
  )
}