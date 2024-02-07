import React, { createContext, useContext, useState,  } from 'react';

const SeatContext = createContext();

export const SeatProvider = ({ children }) => {
  const [seat, setSeat] = useState([]);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    localStorage.setItem('seat', JSON.stringify(seat));
  }, [seat]);

  const updateSeat = (newSeat) => {
    setSeat(newSeat);
  };

  const updateCost = (newCost) => {
    setCost(newCost);
  };

  return (
    <SeatContext.Provider value={{ seat, cost, updateSeat, updateCost }}>
      {children}
    </SeatContext.Provider>
  );
};

export const useSeat = () => {
  const context = useContext(SeatContext);
  if (!context) {
    throw new Error('useSeat must be used within a SeatProvider');
  }
  return context;
};