import styles from './ProseImg.module.css';

interface Props {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

export function ProseImg({ src = '', alt = '', width, height }: Props) {
  return (
    <div className={`${styles.imgHolder} img-holder`}>
      <div className={`${styles.imgCont} img-cont`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={width} height={height} />
        {alt.trim().length > 0 && (
          <span className={styles.imgCaption}>{alt}</span>
        )}
      </div>
    </div>
  );
}
