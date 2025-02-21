import Image from 'next/image';
import { useEffect } from 'react';

interface GridItemProps {
  title: string;
  description?: string;
  link?: string;
  image: string;
  wide?: boolean;
  tall?: boolean;
}

export const GridItem = ({
  title,
  description,
  link,
  image,
  wide,
  tall,
}: GridItemProps) => {
  return (
    <li
      className={`flex flex-col items-center overflow-hidden bg-white`}
      style={{
        // width: `${wide ? 50 : 25}%`,
        // height: `${tall ? 50 : 25}%`,
        gridColumnEnd: `span ${wide ? 2 : 1}`,
        gridRowEnd: `span ${tall ? 2 : 1}`,
        aspectRatio: `${wide ? (tall ? '1/1' : '2/1') : tall ? '1/2' : '1/1'}`,
      }}
      // style={landscape ? { gridColumn: 'span 2' } : {}}
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image src={image} alt={title} className="min-w-full min-h-full" />
        </a>
      ) : (
        <Image
          src={image}
          alt={title}
          width={512}
          height={512}
          className="object-cover"
          // className="min-w-full min-h-full"
        />
      )}
    </li>
  );
};
