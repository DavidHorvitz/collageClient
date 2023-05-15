import { useEffect, useRef } from 'react';

const useIdleTimeout = (timeoutDuration, onTimeout) => {
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(onTimeout, timeoutDuration);
  };

  const handleActivity = () => {
    resetTimeout();
  };

  useEffect(() => {
    const events = ['mousemove', 'keydown'];

    const handleUserActivity = () => {
      handleActivity();
    };

    for (let event of events) {
      document.addEventListener(event, handleUserActivity);
    }

    resetTimeout();

    return () => {
      for (let event of events) {
        document.removeEventListener(event, handleUserActivity);
      }
      clearTimeout(timeoutRef.current);
    };
  }, [timeoutDuration, onTimeout]);

  return resetTimeout;
};

export default useIdleTimeout;
