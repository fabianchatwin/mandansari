import React, { useEffect, useRef } from "react";


declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
  }
}



interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadYouTubePlayerAPI = () => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    };

    if (!window.YT) {
      loadYouTubePlayerAPI();
    } else {
      createPlayer();
    }
  }, [videoId]);

  const createPlayer = () => {
    if (!playerRef.current) return;

    new window.YT.Player(playerRef.current, {
      videoId,
      height: 205,
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 0,
        rel: 0,
        fs: 1,
      },
    });
  };

  return <div ref={playerRef}></div>;
};

export default VideoPlayer;
