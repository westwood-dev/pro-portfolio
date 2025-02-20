interface VideoProps {
  src?: string;
}

export const Video = ({ src }: VideoProps) => {
  // Refine src to handle relative paths
  const refinedSrc = src?.startsWith('/') ? src : `/${src}`;

  return (
    <div className="video-holder">
      <video src={refinedSrc} muted autoPlay loop playsInline />
    </div>
  );
};

export default Video;