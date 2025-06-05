import { useEffect, useState } from 'react';

export const usePermissionIntent = (type, gestureAvailable) => {
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!gestureAvailable) return;

    if (type === 'notifications') {
      Notification.requestPermission().then(result => {
        setStatus(result);
      });
    }

    if (type === 'geolocation') {
      navigator.geolocation.getCurrentPosition(
        () => setStatus('granted'),
        () => setStatus('denied')
      );
    }
  }, [type, gestureAvailable]);

  return status;
};
