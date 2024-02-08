import { useState, useEffect } from 'react';
import { useUser } from '../UserContext';
import { useSeat } from '../SeatContext';
import axios from 'axios';

const SeatLogic = () => {
  const { user } = useUser();
  const { seat, cost, updateCost } = useSeat();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function reserveSeats(seatIds, userEmail) {
    try {
        for (const seatId of seatIds) {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/seat/${seatId}/post`, {
                owner_id: userEmail
            });
        }
        console.log("Seats reserved successfully!");
    } catch (error) {
        console.error(`Error reserving seats: ${error.message}`);
    }
  }

  useEffect(() => {
    console.log(user.email);
  }, [user]);

  useEffect(() => {
    console.log(seat);
  }, [seat]);

  useEffect(() => {
      setIsLoggedIn(!!user.email);
  }, [user]);

  useEffect(() => {
      const calculateTotalCost = async () => {
        let totalCost = 0;
  
        for (const seatID of seat) {
          try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/seat/${seatID}`);
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

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js"
    const clientKey = process.env.REACT_APP_SANDBOX_MIDTRANS_CLIENT_KEY
    const script = document.createElement('script')
    script.src = snapScript
    script.setAttribute('data-client-key', clientKey)
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleClick = async () => {
    if (isLoggedIn) {
      if (cost !== 0) {
        const transaction_data = {
          id: seat, 
          price: cost, 
          first_name: user.given_name, 
          last_name: user.family_name, 
          email: user.email
        }

        try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/tokenizer/${user.email}`, transaction_data);
          const requestData = await response.data;
          console.log(requestData.token);
          console.log(requestData.redirect_url);
          console.log(seat);
          if (requestData.token) {
            window.snap.pay(requestData.token, {
              onSuccess: function (result) {
                reserveSeats(seat, user.email)
              },
              onPending: function (result) {
                alert("waiting for your payment!");
                console.log(result);
              },
              onError: function (result) {
                alert("payment failed!");
                console.log(result);
              },
              onClose: function () {
                alert('you closed the popup without finishing the payment');
              }
            });
          }          
        } catch (error) {
          console.error('Error fetching snapToken:', error);
        }
      } else {
        window.alert('You purchased nothing');
      }
    } else {
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