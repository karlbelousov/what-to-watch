import { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  previewImage: string;
  previewVideoLink: string;
}

function VideoPlayer({previewVideoLink, previewImage}: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current?.addEventListener('loadeddata', () => setIsLoading(false));

    const timer = setTimeout(() => {
      videoRef.current?.play();
    }, 1000);

    return () => clearTimeout(timer);

  }, [isLoading]);

  return (
    <video
      className="player__video"
      src={previewVideoLink}
      poster={previewImage}
      ref={videoRef}
      muted
    />
  );
}

export default VideoPlayer;
