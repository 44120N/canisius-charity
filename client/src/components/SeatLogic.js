import { useState, useEffect } from 'react';
import { useUser } from '../UserContext';
import { useSeat } from '../SeatContext';
import axios from 'axios';

const SeatLogic = () => {
    const { user } = useUser();
    const { seat, cost, updateCost } = useSeat();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(!!user.email);
    }, [user]);

    useEffect(() => {
        const calculateTotalCost = async () => {
            let totalCost = 0;
      
            for (const seatID of seat) {
              try {
                const response = await axios.get(`/api/seat/${seatID}`);
                const seatData = response.data;
      
                if (seatData.isVIP) {
                  totalCost += 750000;
                } else {
                  totalCost += 500000;
                }
              } catch (error) {
                console.error(`Error fetching seat ${seatID} data:`, error);
              }
            }
      
            updateCost(totalCost);
        };
      
        calculateTotalCost();
    }, [seat]);

    const handleClick = () => {
      const orderButton = document.getElementById('order-button');
      if (isLoggedIn) {
        if (cost !== 0) {
          orderButton.disabled = false;
          console.log('Purchase can be executed');
        } else {
          orderButton.disabled = true;
          window.alert('You purchased nothing');
        }
      } else {
        orderButton.disabled = true;
        window.alert('Sign in first');
      }
    };

    const getButtonStyle = () => ({
        padding: '1%',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#fff',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: isLoggedIn ? 'pointer' : 'not-allowed',
        backgroundColor: isLoggedIn ? '#4CAF50' : '#f44336'
    });

    return (
        <button id='order-button' style={getButtonStyle()} onClick={handleClick}>Order Seat</button>
    );
};

export default SeatLogic;