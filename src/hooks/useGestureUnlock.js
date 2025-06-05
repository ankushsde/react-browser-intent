import { useState, useEffect } from 'react';

export const useGestureUnlock = () => {
  const [gestureAvailable, setGestureAvailable] = useState(false);

  useEffect(() => {
    const unlock = () => {
      setGestureAvailable(true);
      window.removeEventListener('click', unlock);
      window.removeEventListener('keydown', unlock);
    };

    window.addEventListener('click', unlock);
    window.addEventListener('keydown', unlock);

    return () => {
      window.removeEventListener('click', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);

  return gestureAvailable;
};
