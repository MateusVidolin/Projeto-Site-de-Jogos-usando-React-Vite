import { useEffect } from 'react';

const ProtectedPageWrapper = ({ children }) => {
  useEffect(() => {
    document.body.classList.add('protected-page');

    return () => {
      document.body.classList.remove('protected-page');
    };
  }, []);

  return <>{children}</>;
};

export default ProtectedPageWrapper;
