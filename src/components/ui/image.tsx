import React from "react";

type ImageSource = {
  src: string;
  type: "image/avif" | "image/webp" | "image/png";
};

type ImageProps = {
  sources: ImageSource[];
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

export const Image: React.FC<ImageProps> = ({
  sources,
  src,
  alt,
  className,
  loading = "eager",
}) => {
  return (
    <picture>
      {sources.map(({ src, type }) => (
        <source key={type} srcSet={src} type={type} />
      ))}
      <img src={src} alt={alt} className={className} loading={loading} />
    </picture>
  );
};
