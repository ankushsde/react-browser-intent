import { useEffect } from 'react';

export const useSafeMedia = (videoRef, gestureAvailable, options = {}) => {
  useEffect(() => {
    if (gestureAvailable && videoRef?.current) {
      const video = videoRef.current;
      video.muted = options.muted ?? false;
      video.volume = options.volume ?? 1;
      video.play().catch(err => {
        console.warn('Playback failed:', err);
      });
    }
  }, [gestureAvailable, videoRef, options]);
};
