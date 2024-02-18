import React from 'react';
import { useState, useEffect } from 'react';
import { useUser } from '../UserContext';
import { useSeat } from '../SeatContext';
import axios from 'axios';

// import QrisImg from "../assets/QRIS.jpg";
import "./Popup.css"

const SeatLogic = () => {
  const { user } = useUser();
  const [transaction_id, set_transaction_id] = useState(0);
  const { seat, updateSeat, cost, updateCost } = useSeat();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buttonPopupQRIS, setButtonPopupQRIS] = useState(false);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);
  }

  useEffect(()=>{
    set_transaction_id(Math.floor(Math.random() * 99) + 1);
  }, []);

  useEffect(()=>{
    try {
      axios.get(`${process.env.REACT_APP_API_URL}/api/user/${user.email}`)
      .then(response => {updateSeat(response.data.id)});
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [user.email]);
  
  async function orderStat(seatIds, isOrder) {
    for (const seatId of seatIds) {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/seat/${seatId}/is_order`, {
        orderStatus: isOrder
      });
    }
  }

  async function set_owner(seatIds, ownerId) {
    for (const seatId of seatIds) {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/seat/${seatId}/post`, {
        owner_id: ownerId
      });
    }
  }

  async function save_transaction(json) {
    await axios.put(`${process.env.REACT_APP_API_URL}/api/user/put`, json);
  }

  async function reset(seatIds) {
    orderStat(seatIds, false);
    set_owner(seatIds, "");
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
    
        updateCost(totalCost+transaction_id);
      };
    
      calculateTotalCost();
  }, [seat]);

  const handleClick = () => {
    if (isLoggedIn) {
      if (cost >= 1000) {
        setButtonPopupQRIS(true);
        const transaction_data = {
          id: transaction_id,
          username: `${user.given_name} ${user.family_name}`,
          email: user.email,
          owned_seat: seat.sort().join(", "),
          amount: parseInt(cost)
        };
        console.log(transaction_data);
        save_transaction(transaction_data);
        set_transaction_id(Math.floor(Math.random() * 99) + 1)
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

  const closeTransaction = () => {
    setButtonPopupQRIS(false);
    alert('You closed the popup without finishing the payment');
  }

  const pendingTransaction = () => {
    alert("Waiting for your payment!");
  }

  const errorTransaction = () => {
    alert("Payment failed!");
    updateSeat([]);
    reset(seat);
  }

  const textToCopy = "3427702777";
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text to clipboard: ', error);
      });
    alert("Text copied")
  };

  return (
    <>
      {buttonPopupQRIS && (
        <div className="popup--QRIS">
          <div className="popup-inner--QRIS">
            <div className="popup-info--QRIS">
              <h2>Ticket Payment</h2>
              <br></br>
              <h3 style={{color: 'var(--red-color)'}}>Please screenshot the payment info as a reminder</h3>
                <p>Item &emsp;: {seat.sort().join(", ")}</p>
                <p>Cost &emsp;: {rupiah(cost)}</p>
                <p>({transaction_id} is the transaction id, so make sure to transfer the same amount as the payment info)</p>
                <p>Name &emsp;: {user.given_name} {user.family_name}</p>
                <p>Email &emsp;: {user.email}</p>
            </div>
            <br/>
            {/* <img src={QrisImg} alt="qris"/> */}
            <h3>Rekening BCA (Click number to Copy)</h3>
            <p>YAY BUDI SISWA: <strong><a style={{color: "#9999FF"}} onClick={handleCopy}>{3427702777}</a></strong></p>
            <br></br>
            <h4>We will check the payment in 24 hours, starts from now!</h4>
            <h4>If the payment is successful, the seat will be <b style={{color: 'var(--red-color)'}}>sold</b> and turned to <b style={{color: 'var(--red-color)'}}>red color</b>!</h4>
            <h4>Otherwise, it will be <b style={{color: 'var(--green-color)'}}>available</b> again and turned to previous color!</h4>
            <br></br>
            <div className='center'>
              <button className="popup__btn--close--QRIS" onClick={closeTransaction}><strong>Cancel</strong></button>
            </div>
          </div>
        </div>
      )}
      <button 
        id='order-button' 
        style={getButtonStyle()} 
        onClick={handleClick} 
        onPending={pendingTransaction} 
        onError={errorTransaction}
      >Order Seat</button>
    </>
  );
};

export default SeatLogic;