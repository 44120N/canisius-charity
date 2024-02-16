import { useState, useEffect } from 'react';
import { useUser } from '../UserContext';

import QrisImg from "../assets/QRIS.jpg";
import "./Popup.css"

const DonateLogic = () => {
  const { user } = useUser();
  const [donate, setDonate] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buttonPopupQRIS, setButtonPopupQRIS] = useState(false);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);
  }

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
        setButtonPopupQRIS(true);
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

  const closeTransaction = (props) => {
    setButtonPopupQRIS(false);
    alert('You closed the popup without finishing the payment');
  }

  const pendingTransaction = () => {
    alert("Waiting for your payment!");
  }

  const errorTransaction = () => {
    alert("Payment failed!");
  }

  const textToCopy = "3429982023";
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
              <h2>Donate</h2>
                <p>Item &emsp;: {"Donate"}</p>
                <p>Cost &emsp;: {rupiah(donate)}</p>
                <p>Name &emsp;: {user.given_name} {user.family_name}</p>
                <p>Email&emsp;: {user.email}</p>
            </div>
            <br/>
            <img src={QrisImg} alt="qris"/>
            <h3>Rekening BCA (Click number to Copy)</h3>
            <p>YAY BUDI SISWA: <strong><a style={{color: "#9999FF"}} onClick={handleCopy}>{3429982023}</a></strong></p>
            <div className='center'>
              <button className="popup__btn--close--QRIS" onClick={closeTransaction}><strong>Cancel</strong></button>
            </div>
          </div>
        </div>
      )}
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
          onPending={pendingTransaction} 
          onError={errorTransaction}
          disabled={!isLoggedIn}
        >Donate</button>
      </div>
    </>
  );
};

export default DonateLogic;