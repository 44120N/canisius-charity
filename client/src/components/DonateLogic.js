import { useState, useEffect } from 'react';
import { useUser } from '../UserContext';
import axios from 'axios';

const DonateLogic = () => {
  const { user } = useUser();
  const [donate, setDonate] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    console.log(user.email);
  }, [user]);

  const handleChange = (event) => {
    setDonate(event.target.value);
  };

  useEffect(() => {
      setIsLoggedIn(!!user.email);
  }, [user]);

  const handleClick = async () => {
    if (isLoggedIn) {
      if (donate !== 0) {
        const transaction_data = {
          id: 'donate', 
          price: donate,
          first_name: user.given_name, 
          last_name: user.family_name, 
          email: user.email
        }

        try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/tokenizer/${user.email}`, transaction_data);
          const requestData = await response.data;
          console.log(requestData.token);
          console.log(requestData.redirect_url);
          console.log(donate);
          if (requestData.token) {
            window.snap.pay(requestData.token, {
              onSuccess: function (result) {
                setDonate(0);
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
        window.alert('You donate nothing');
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
      backgroundColor: '#4CAF50'
  });

  return (
    <>
      <div className='input-group'>
        <span className="input-group-addon">
            Rp
        </span>
        <input
          type="number"
          id="donate_val"
          value={donate}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
      </div>
      <div>
        <button
          id='donate-button'
          style={getButtonStyle()}
          onClick={handleClick}
          disabled={!isLoggedIn}
        >
          Donate
        </button>
      </div>
    </>
  );
};

export default DonateLogic;