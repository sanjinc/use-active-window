const { useState, useEffect } = require('react');

export const useActiveWindow = () => {
  const [isActive, setIsActive] = useState(true);
  const hasDocument = typeof document !== 'undefined';

  useEffect(() => {
    const interval = setInterval(() => {
      if (hasDocument) {
        setIsActive(document.hasFocus());
      }
    }, 200);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return isActive;
};

module.exports = useActiveWindow;
