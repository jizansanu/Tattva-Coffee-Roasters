type Props = {
  mp4: string;
  webm: string;
  poster: string;
  className?: string;
};

// Muted autoplaying looped background video with poster fallback.
export default function BgVideo({ mp4, webm, poster, className }: Props) {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      preload="metadata"
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
