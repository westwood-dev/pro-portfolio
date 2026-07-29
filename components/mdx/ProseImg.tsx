import styles from './ProseImg.module.css';

interface Props {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  srcSet?: string;
  sizes?: string;
}

export function ProseImg({ src = '', alt = '', width, height, srcSet, sizes }: Props) {
  return (
    <div className={`${styles.imgHolder} img-holder`} data-fade="">
      <div className={`${styles.imgCont} img-cont`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
        {alt.trim().length > 0 && (
          <span className={styles.imgCaption}>{alt}</span>
        )}
      </div>
    </div>
  );
}
