import { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  previewImage: string;
  previewVideoLink: string;
  activeFilm: null | number;
}

function VideoPlayer({previewVideoLink, activeFilm, previewImage}: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef === null) {
      return;
    }

    videoRef.current?.addEventListener('loadeddata', () => setIsLoading(false));

    if (!isLoading && !activeFilm) {
      return;
    }

    const timer = setTimeout(() => {
      videoRef.current?.play();
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLoading, activeFilm]);

  return (
    <video
      className="player__video"
      src={previewVideoLink}
      poster={previewImage}
      ref={videoRef}
    />
  );
}

export default VideoPlayer;
