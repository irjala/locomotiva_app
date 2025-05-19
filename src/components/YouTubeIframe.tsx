import React from "react";

interface YouTubeIframeProps {
  src: string;
  title: string;
}

const YouTubeIframe: React.FC<YouTubeIframeProps> = ({ src, title }) => (
  <iframe
    width="560"
    height="315"
    src={src}
    title={title}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

export default YouTubeIframe;