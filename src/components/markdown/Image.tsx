interface ImageProps {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

export const Image = ({ src, alt, width, height }: ImageProps) => {
  // Refine src to handle relative paths
  const refinedSrc = src?.startsWith('/') ? src : `/${src}`;

  return (
    <div className="img-holder">
      <div className="img-cont">
        <img
          src={refinedSrc}
          alt={alt}
          width={width}
          height={height}
        />
        {alt && alt.length > 0 && (
          <span className="img-caption">{alt}</span>
        )}
      </div>
    </div>
  );
};

export default Image;