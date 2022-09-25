import { useState, useEffect } from "react";

export const useImageLoad = (src) => {
  const [sourceLoaded, setSourceLoaded] = useState(null);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    // setTimeout(() => {
      img.onload = () => setSourceLoaded(src);
    // }, 200);
  }, [src]);

  return sourceLoaded;
};
