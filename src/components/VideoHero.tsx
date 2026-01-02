import { ReactNode } from "react";

interface VideoHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  videoSrc?: string;
  imageSrc?: string; // <-- Added image background support
  className?: string;
}

const VideoHero = ({
  title,
  subtitle,
  children,
  videoSrc,
  imageSrc,
  className = "",
}: VideoHeroProps) => {
  return (
    <section
      className={`relative h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt="Background"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-hero" />
        )}
        {/* Overlay for darkening */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="animate-text-shimmer bg-gradient-to-r from-white via-primary-glow to-secondary bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        {subtitle && (
          <p
            className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {subtitle}
          </p>
        )}

        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {children}
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 z-5">
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-12 h-12 bg-secondary/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary-glow/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-8 h-8 bg-secondary/30 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
    </section>
  );
};

export default VideoHero;
