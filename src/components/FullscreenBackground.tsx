interface FullscreenBackgroundProps {
  image: string;
  gradient?: string; // Optional gradient overlay
  children?: React.ReactNode; // Content to overlay on the background
}

export default function FullscreenBackground({
  image,
  gradient = "linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%, white 100%)",
  children,
}: FullscreenBackgroundProps) {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `${gradient}, url(${image})`,
      }}
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}