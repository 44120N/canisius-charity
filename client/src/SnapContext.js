import { createContext, useContext, useState } from 'react';

const SnapContext = createContext();

export const SnapProvider = ({ children }) => {
  const [snapToken, setSnapToken] = useState(null);

  const updateSnapToken = (token) => {
    setSnapToken(token);
  };

  return (
    <SnapContext.Provider value={{ snapToken, updateSnapToken }}>
      {children}
    </SnapContext.Provider>
  );
};

export const useSnap = () => {
  const context = useContext(SnapContext);
  if (!context) {
    throw new Error('useSnap must be used within a SnapProvider');
  }
  return context;
};