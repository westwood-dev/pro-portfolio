interface Props {
  src?: string;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
}

export function ProseVideo({ src = '', muted, autoPlay, loop, playsInline, controls }: Props) {
  return (
    <div data-fade="">
      <video
        src={src}
        muted={muted}
        autoPlay={autoPlay}
        loop={loop}
        playsInline={playsInline}
        controls={controls}
        style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
      />
    </div>
  );
}
