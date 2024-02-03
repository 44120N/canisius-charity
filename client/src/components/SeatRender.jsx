import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSeat } from '../SeatContext';

const BLUE = "var(--blue-color)"
const RED = "var(--red-color)"
const GREEN = "var(--green-color)"
const GOLD = "var(--gold-color)"

function SeatLayout() {
  const [seats, setSeats] = useState([]);
  const { seat, updateSeat } = useSeat([]);

  useEffect(() => {
    axios.get('/api/seats')
    .then(response => setSeats(response.data))
    .catch(error => console.error('Error fetching seat data:', error));
  }, [seat]);
  
  const renderSeatButtons = () => {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              { SeatButton("A0") }
            </td>
            <td>
              { SeatButton("A1") }
            </td>
            <td>
              { SeatButton("A2") }
            </td>
            <td>
              { SeatButton("A3") }
            </td>
            <td>
              { SeatButton("A4") }
            </td>
          </tr>
          <tr>
            <td>
              { SeatButton("A5") }
            </td>
            <td>
              { SeatButton("A6") }
            </td>
            <td>
              { SeatButton("A7") }
            </td>
            <td>
              { SeatButton("A8") }
            </td>
            <td>
              { SeatButton("A9") }
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  const SeatButton = (seatID) =>{
    const foundSeat = seats.find(seat => seat.id === seatID);
    const [isOrder, setIsOrder] = useState(false);

    const handleClick = () =>{
      if (foundSeat && foundSeat.isAvailable) {
        updateSeatStatus();
      }
      else{
        window.alert("Seat is not available now");
      }
    }

    const updateSeatStatus = async () => {
      try {
        setIsOrder(!isOrder);
        if (!seat.includes(seatID)) {
          updateSeat([...seat, seatID]);
        } else {
          updateSeat(seat.filter(seat => seat !== seatID));
        }
        console.log(`Seat ${seatID} order status updated successfully`);
      } catch (error) {
        console.error(`Error updating seat ${seatID} order status:`, error);
      }
    };
    
    const getSeatColor = () => {
      if (foundSeat) {
        return isOrder ? BLUE : foundSeat.isVIP ? GOLD : foundSeat.isAvailable ? GREEN : RED;
      }
      return "#000";
    };
    return <button id={seatID} style={{ backgroundColor: getSeatColor() }} onClick={ handleClick }>{seatID}</button>    
  }

  return (
    <>
      {renderSeatButtons()}
    </>
  );
}

export default SeatLayout;
