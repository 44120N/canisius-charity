import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSeat } from '../SeatContext';
// import io from 'socket.io-client';
// import seatLayout from "../assets/null.png"

// const socket = io.connect(`${process.env.REACT_APP_API_URL}`); 

const BLUE = "var(--blue-color)";
const RED = "var(--red-color)";
const GREEN = "var(--green-color)";
const GOLD = "var(--gold-color)";
const YELLOW = "var(--yellow-color)";
const PURPLE = "var(--purple-color)";
const seatCGap = "32px";
const seatEGap = "175px";

function SeatLayout() {
  const [seats, setSeats] = useState([]);
  const { seat, updateSeat } = useSeat([]);

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/api/seats`)
  //   .then(response => setSeats(response.data))
  //   .catch(error => console.error('Error fetching seat data:', error));
  // }, [seat]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(`${process.env.REACT_APP_API_URL}/api/seats`)
        .then(response => setSeats(response.data))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const intervalId = setInterval(fetchData, 1000); // Fetch data every 1 second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // const handleSeatChange = (changedSeat) => {
  //   // Update the UI with the changed seat
  //   setSeats((prevSeats) =>
  //     prevSeats.map((seat) =>
  //       seat.id === changedSeat.id ? { ...seat, ...changedSeat } : seat
  //     )
  //   );
  // };

  // useEffect(() => {
  //   // Fetch initial seat data
  //   fetchSeatData();

  //   // Listen for seat change events from the server
  //   socket.on('seat_change', handleSeatChange);

  //   return () => {
  //     socket.off('seat_change', handleSeatChange);
  //   };
  // }, []);

  // const fetchSeatData = async () => {
  //   try {
  //     const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/seats`);
  //     setSeats(response.data);
  //   } catch (error) {
  //     console.error('Error fetching seat data:', error);
  //   }
  // };

  const renderSeatButtons = () => {
    return (<>
    {/* <img className="imageLayout" src={seatLayout}/> */}
    <div className="table">
        <table id="table__mother">
            <div className="table__left">
              <tr className="table__side">
                <td>
                  <table id="C">
                    <tbody>
                      <tr>
                        <td>
                          <div className="table__flex" style={{marginLeft: seatCGap}}>
                            { SeatButton("C101") }
                            { SeatButton("C102") }
                            { SeatButton("C103") }
                            { SeatButton("C104") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("C81") }
                            { SeatButton("C82") }
                            { SeatButton("C83") }
                            { SeatButton("C84") }
                            { SeatButton("C85") }
                            { SeatButton("C86") }
                            { SeatButton("C87") }
                            { SeatButton("C88") }
                            { SeatButton("C89") }
                            { SeatButton("C90") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("C91") }
                            { SeatButton("C92") }
                            { SeatButton("C93") }
                            { SeatButton("C94") }
                            { SeatButton("C95") }
                            { SeatButton("C96") }
                            { SeatButton("C97") }
                            { SeatButton("C98") }
                            { SeatButton("C99") }
                            { SeatButton("C100") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("C61") }
                            { SeatButton("C62") }
                            { SeatButton("C63") }
                            { SeatButton("C64") }
                            { SeatButton("C65") }
                            { SeatButton("C66") }
                            { SeatButton("C67") }
                            { SeatButton("C68") }
                            { SeatButton("C69") }
                            { SeatButton("C70") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("C71") }
                            { SeatButton("C72") }
                            { SeatButton("C73") }
                            { SeatButton("C74") }
                            { SeatButton("C75") }
                            { SeatButton("C76") }
                            { SeatButton("C77") }
                            { SeatButton("C78") }
                            { SeatButton("C79") }
                            { SeatButton("C80") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                            <div className="table__flex">
                              { SeatButton("C41") }
                              { SeatButton("C42") }
                              { SeatButton("C43") }
                              { SeatButton("C44") }
                              { SeatButton("C45") }
                              { SeatButton("C46") }
                              { SeatButton("C47") }
                              { SeatButton("C48") }
                              { SeatButton("C49") }
                              { SeatButton("C50") }
                            </div>
                          </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("C51") }
                            { SeatButton("C52") }
                            { SeatButton("C53") }
                            { SeatButton("C54") }
                            { SeatButton("C55") }
                            { SeatButton("C56") }
                            { SeatButton("C57") }
                            { SeatButton("C58") }
                            { SeatButton("C59") }
                            { SeatButton("C60") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("C21") }
                            { SeatButton("C22") }
                            { SeatButton("C23") }
                            { SeatButton("C24") }
                            { SeatButton("C25") }
                            { SeatButton("C26") }
                            { SeatButton("C27") }
                            { SeatButton("C28") }
                            { SeatButton("C29") }
                            { SeatButton("C30") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("C31") }
                            { SeatButton("C32") }
                            { SeatButton("C33") }
                            { SeatButton("C34") }
                            { SeatButton("C35") }
                            { SeatButton("C36") }
                            { SeatButton("C37") }
                            { SeatButton("C38") }
                            { SeatButton("C39") }
                            { SeatButton("C40") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("C1") }
                            { SeatButton("C2") }
                            { SeatButton("C3") }
                            { SeatButton("C4") }
                            { SeatButton("C5") }
                            { SeatButton("C6") }
                            { SeatButton("C7") }
                            { SeatButton("C8") }
                            { SeatButton("C9") }
                            { SeatButton("C10") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("C11") }
                            { SeatButton("C12") }
                            { SeatButton("C13") }
                            { SeatButton("C14") }
                            { SeatButton("C15") }
                            { SeatButton("C16") }
                            { SeatButton("C17") }
                            { SeatButton("C18") }
                            { SeatButton("C19") }
                            { SeatButton("C20") }
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>  
              </tr>
              <tr className="table__side">
                <td>
                <table id="B">
                    <tbody>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("B81") }
                            { SeatButton("B82") }
                            { SeatButton("B83") }
                            { SeatButton("B84") }
                            { SeatButton("B85") }
                            { SeatButton("B86") }
                            { SeatButton("B87") }
                            { SeatButton("B88") }
                            { SeatButton("B89") }
                            { SeatButton("B90") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("B91") }
                            { SeatButton("B92") }
                            { SeatButton("B93") }
                            { SeatButton("B94") }
                            { SeatButton("B95") }
                            { SeatButton("B96") }
                            { SeatButton("B97") }
                            { SeatButton("B98") }
                            { SeatButton("B99") }
                            { SeatButton("B100") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("B61") }
                            { SeatButton("B62") }
                            { SeatButton("B63") }
                            { SeatButton("B64") }
                            { SeatButton("B65") }
                            { SeatButton("B66") }
                            { SeatButton("B67") }
                            { SeatButton("B68") }
                            { SeatButton("B69") }
                            { SeatButton("B70") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("B71") }
                            { SeatButton("B72") }
                            { SeatButton("B73") }
                            { SeatButton("B74") }
                            { SeatButton("B75") }
                            { SeatButton("B76") }
                            { SeatButton("B77") }
                            { SeatButton("B78") }
                            { SeatButton("B79") }
                            { SeatButton("B80") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                      <td>
                          <div className="table__flex">
                            { SeatButton("B41") }
                            { SeatButton("B42") }
                            { SeatButton("B43") }
                            { SeatButton("B44") }
                            { SeatButton("B45") }
                            { SeatButton("B46") }
                            { SeatButton("B47") }
                            { SeatButton("B48") }
                            { SeatButton("B49") }
                            { SeatButton("B50") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("B51") }
                            { SeatButton("B52") }
                            { SeatButton("B53") }
                            { SeatButton("B54") }
                            { SeatButton("B55") }
                            { SeatButton("B56") }
                            { SeatButton("B57") }
                            { SeatButton("B58") }
                            { SeatButton("B59") }
                            { SeatButton("B60") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("B21") }
                            { SeatButton("B22") }
                            { SeatButton("B23") }
                            { SeatButton("B24") }
                            { SeatButton("B25") }
                            { SeatButton("B26") }
                            { SeatButton("B27") }
                            { SeatButton("B28") }
                            { SeatButton("B29") }
                            { SeatButton("B30") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("B31") }
                            { SeatButton("B32") }
                            { SeatButton("B33") }
                            { SeatButton("B34") }
                            { SeatButton("B35") }
                            { SeatButton("B36") }
                            { SeatButton("B37") }
                            { SeatButton("B38") }
                            { SeatButton("B39") }
                            { SeatButton("B40") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("B1") }
                            { SeatButton("B2") }
                            { SeatButton("B3") }
                            { SeatButton("B4") }
                            { SeatButton("B5") }
                            { SeatButton("B6") }
                            { SeatButton("B7") }
                            { SeatButton("B8") }
                            { SeatButton("B9") }
                            { SeatButton("B10") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("B11") }
                            { SeatButton("B12") }
                            { SeatButton("B13") }
                            { SeatButton("B14") }
                            { SeatButton("B15") }
                            { SeatButton("B16") }
                            { SeatButton("B17") }
                            { SeatButton("B18") }
                            { SeatButton("B19") }
                            { SeatButton("B20") }
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </div>
            <div className="table__center">
            
              <tr className="table__mid">
                <td>
                <table id="A">
                    <tbody>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("A97") }
                            { SeatButton("A98") }
                            { SeatButton("A99") }
                            { SeatButton("A100") }
                            { SeatButton("A101") }
                            { SeatButton("A102") }
                            { SeatButton("A103") }
                            { SeatButton("A104") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex justify-end">
                          { SeatButton("A105") }
                          { SeatButton("A106") }
                          { SeatButton("A107") }
                          { SeatButton("A108") }
                          { SeatButton("A109") }
                          { SeatButton("A110") }
                          { SeatButton("A111") }
                          { SeatButton("A112") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("A81") }
                            { SeatButton("A82") }
                            { SeatButton("A83") }
                            { SeatButton("A84") }
                            { SeatButton("A85") }
                            { SeatButton("A86") }
                            { SeatButton("A87") }
                            { SeatButton("A88") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex justify-end">
                            { SeatButton("A89") }
                            { SeatButton("A90") }
                            { SeatButton("A91") }
                            { SeatButton("A92") }
                            { SeatButton("A93") }
                            { SeatButton("A94") }
                            { SeatButton("A95") }
                            { SeatButton("A96") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("A65") }
                            { SeatButton("A66") }
                            { SeatButton("A67") }
                            { SeatButton("A68") }
                            { SeatButton("A69") }
                            { SeatButton("A70") }
                            { SeatButton("A71") }
                            { SeatButton("A72") }
                            
                          </div>
                        </td>
                        <td>
                          <div className="table__flex justify-end">
                            { SeatButton("A73") }
                            { SeatButton("A74") }
                            { SeatButton("A75") }
                            { SeatButton("A76") }
                            { SeatButton("A77") }
                            { SeatButton("A78") }
                            { SeatButton("A79") }
                            { SeatButton("A80") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("A49") }
                            { SeatButton("A50") }
                            { SeatButton("A51") }
                            { SeatButton("A52") }
                            { SeatButton("A53") }
                            { SeatButton("A54") }
                            { SeatButton("A55") }
                            { SeatButton("A56") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex justify-end">
                            { SeatButton("A57") }
                            { SeatButton("A58") }
                            { SeatButton("A59") }
                            { SeatButton("A60") }
                            { SeatButton("A61") }
                            { SeatButton("A62") }
                            { SeatButton("A63") }
                            { SeatButton("A64") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                      <td>
                          <div className="table__flex">
                            { SeatButton("A33") }
                            { SeatButton("A34") }
                            { SeatButton("A35") }
                            { SeatButton("A36") }
                            { SeatButton("A37") }
                            { SeatButton("A38") }
                            { SeatButton("A39") }
                            { SeatButton("A40") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex justify-end">
                            { SeatButton("A41") }
                            { SeatButton("A42") }
                            { SeatButton("A43") }
                            { SeatButton("A44") }
                            { SeatButton("A45") }
                            { SeatButton("A46") }
                            { SeatButton("A47") }
                            { SeatButton("A48") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("A17") }
                            { SeatButton("A18") }
                            { SeatButton("A19") }
                            { SeatButton("A20") }
                            { SeatButton("A21") }
                            { SeatButton("A22") }
                            { SeatButton("A23") }
                            { SeatButton("A24") }
                            
                          </div>
                        </td>
                        <td>
                          <div className="table__flex justify-end">
                            { SeatButton("A25") }
                            { SeatButton("A26") }
                            { SeatButton("A27") }
                            { SeatButton("A28") }
                            { SeatButton("A29") }
                            { SeatButton("A30") }
                            { SeatButton("A31") }
                            { SeatButton("A32") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("A1") }
                            { SeatButton("A2") }
                            { SeatButton("A3") }
                            { SeatButton("A4") }
                            { SeatButton("A5") }
                            { SeatButton("A6") }
                            { SeatButton("A7") }
                            { SeatButton("A8") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex justify-end">
                            { SeatButton("A9") }
                            { SeatButton("A10") }
                            { SeatButton("A11") }
                            { SeatButton("A12") }
                            { SeatButton("A13") }
                            { SeatButton("A14") }
                            { SeatButton("A15") }
                            { SeatButton("A16") }
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr className="table__mid">
                <td>
                <table id="VVIP">
                    <tbody>
                      <tr>
                      <td>
                          <div className="table__flex">
                            { SeatButton("V37") }
                            { SeatButton("V38") }
                            { SeatButton("V39") }
                            { SeatButton("V40") }
                            { SeatButton("V41") }
                            { SeatButton("V42") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("V43") }
                            { SeatButton("V44") }
                            { SeatButton("V45") }
                            { SeatButton("V46") }
                            { SeatButton("V47") }
                            { SeatButton("V48") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("V49") }
                            { SeatButton("V50") }
                            { SeatButton("V51") }
                            { SeatButton("V52") }
                            { SeatButton("V53") }
                            { SeatButton("V54") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex">
                            { SeatButton("V19") }
                            { SeatButton("V20") }
                            { SeatButton("V21") }
                            { SeatButton("V22") }
                            { SeatButton("V23") }
                            { SeatButton("V24") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("V25") }
                            { SeatButton("V26") }
                            { SeatButton("V27") }
                            { SeatButton("V28") }
                            { SeatButton("V29") }
                            { SeatButton("V30") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex">
                            { SeatButton("V31") }
                            { SeatButton("V32") }
                            { SeatButton("V33") }
                            { SeatButton("V34") }
                            { SeatButton("V35") }
                            { SeatButton("V36") }
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table__flex vvip">
                            { SeatButton("V1") }
                            { SeatButton("V2") }
                            { SeatButton("V3") }
                            { SeatButton("V4") }
                            { SeatButton("V5") }
                            { SeatButton("V6") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex vvip">
                            { SeatButton("V7") }
                            { SeatButton("V8") }
                            { SeatButton("V9") }
                            { SeatButton("V10") }
                            { SeatButton("V11") }
                            { SeatButton("V12") }
                          </div>
                        </td>
                        <td>
                          <div className="table__flex vvip">
                            { SeatButton("V13") }
                            { SeatButton("V14") }
                            { SeatButton("V15") }
                            { SeatButton("V16") }
                            { SeatButton("V17") }
                            { SeatButton("V18") }
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  
                </td>
              </tr>
            </div>
            <div className="table__right">
            <tr className="table__side">
              <td>
              <table id="E">
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        <div className="table__flex" style={{marginLeft: seatEGap}}>
                          { SeatButton("E101") }
                          { SeatButton("E102") }
                          { SeatButton("E103") }
                          { SeatButton("E104") }
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table__flex">
                          { SeatButton("E81") }
                          { SeatButton("E82") }
                          { SeatButton("E83") }
                          { SeatButton("E84") }
                          { SeatButton("E85") }
                          { SeatButton("E86") }
                          { SeatButton("E87") }
                          { SeatButton("E88") }
                          { SeatButton("E89") }
                          { SeatButton("E90") }
                        </div>
                      </td>
                      <td>
                        <div className="table__flex">
                          { SeatButton("E91") }
                          { SeatButton("E92") }
                          { SeatButton("E93") }
                          { SeatButton("E94") }
                          { SeatButton("E95") }
                          { SeatButton("E96") }
                          { SeatButton("E97") }
                          { SeatButton("E98") }
                          { SeatButton("E99") }
                          { SeatButton("E100") }
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table__flex">
                          { SeatButton("E61") }
                          { SeatButton("E62") }
                          { SeatButton("E63") }
                          { SeatButton("E64") }
                          { SeatButton("E65") }
                          { SeatButton("E66") }
                          { SeatButton("E67") }
                          { SeatButton("E68") }
                          { SeatButton("E69") }
                          { SeatButton("E70") }
                        </div>
                      </td>
                      <td>
                        <div className="table__flex">
                          { SeatButton("E71") }
                          { SeatButton("E72") }
                          { SeatButton("E73") }
                          { SeatButton("E74") }
                          { SeatButton("E75") }
                          { SeatButton("E76") }
                          { SeatButton("E77") }
                          { SeatButton("E78") }
                          { SeatButton("E79") }
                          { SeatButton("E80") }
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td>
                        <div className="table__flex">
                          { SeatButton("E41") }
                          { SeatButton("E42") }
                          { SeatButton("E43") }
                          { SeatButton("E44") }
                          { SeatButton("E45") }
                          { SeatButton("E46") }
                          { SeatButton("E47") }
                          { SeatButton("E48") }
                          { SeatButton("E49") }
                          { SeatButton("E50") }
                        </div>
                      </td>
                      <td>
                        <div className="table__flex">
                          { SeatButton("E51") }
                          { SeatButton("E52") }
                          { SeatButton("E53") }
                          { SeatButton("E54") }
                          { SeatButton("E55") }
                          { SeatButton("E56") }
                          { SeatButton("E57") }
                          { SeatButton("E58") }
                          { SeatButton("E59") }
                          { SeatButton("E60") }
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table__flex">
                          { SeatButton("E21") }
                          { SeatButton("E22") }
                          { SeatButton("E23") }
                          { SeatButton("E24") }
                          { SeatButton("E25") }
                          { SeatButton("E26") }
                          { SeatButton("E27") }
                          { SeatButton("E28") }
                          { SeatButton("E29") }
                          { SeatButton("E30") }
                        </div>
                      </td>
                      <td>
                        <div className="table__flex">
                          { SeatButton("E31") }
                          { SeatButton("E32") }
                          { SeatButton("E33") }
                          { SeatButton("E34") }
                          { SeatButton("E35") }
                          { SeatButton("E36") }
                          { SeatButton("E37") }
                          { SeatButton("E38") }
                          { SeatButton("E39") }
                          { SeatButton("E40") }
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table__flex">
                          { SeatButton("E1") }
                          { SeatButton("E2") }
                          { SeatButton("E3") }
                          { SeatButton("E4") }
                          { SeatButton("E5") }
                          { SeatButton("E6") }
                          { SeatButton("E7") }
                          { SeatButton("E8") }
                          { SeatButton("E9") }
                          { SeatButton("E10") }
                        </div>
                      </td>
                      <td>
                        <div className="table__flex">
                          { SeatButton("E11") }
                          { SeatButton("E12") }
                          { SeatButton("E13") }
                          { SeatButton("E14") }
                          { SeatButton("E15") }
                          { SeatButton("E16") }
                          { SeatButton("E17") }
                          { SeatButton("E18") }
                          { SeatButton("E19") }
                          { SeatButton("E20") }
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr className="table__side">
              <td>
              <table id="D">
                  <tbody>
                    <tr>
                      <td>
                        <div className="table__flex">
                          { SeatButton("D81") }
                          { SeatButton("D82") }
                          { SeatButton("D83") }
                          { SeatButton("D84") }
                          { SeatButton("D85") }
                          { SeatButton("D86") }
                          { SeatButton("D87") }
                          { SeatButton("D88") }
                          { SeatButton("D89") }
                          { SeatButton("D90") }
                        </div>
                      </td>
                      <td>
                        <div className="table__flex">
                          { SeatButton("D91") }
                          { SeatButton("D92") }
                          { SeatButton("D93") }
                          { SeatButton("D94") }
                          { SeatButton("D95") }
                          { SeatButton("D96") }
                          { SeatButton("D97") }
                          { SeatButton("D98") }
                          { SeatButton("D99") }
                          { SeatButton("D100") }
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table__flex">
                          { SeatButton("D61") }
                          { SeatButton("D62") }
                          { SeatButton("D63") }
                          { SeatButton("D64") }
                          { SeatButton("D65") }
                          { SeatButton("D66") }
                          { SeatButton("D67") }
                          { SeatButton("D68") }
                          { SeatButton("D69") }
                          { SeatButton("D70") }
                        </div>
                      </td>
                      <td>
                        <div className="table__flex">
                          { SeatButton("D71") }
                          { SeatButton("D72") }
                          { SeatButton("D73") }
                          { SeatButton("D74") }
                          { SeatButton("D75") }
                          { SeatButton("D76") }
                          { SeatButton("D77") }
                          { SeatButton("D78") }
                          { SeatButton("D79") }
                          { SeatButton("D80") }
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td>
                        <div className="table__flex">
                          { SeatButton("D41") }
                          { SeatButton("D42") }
                          { SeatButton("D43") }
                          { SeatButton("D44") }
                          { SeatButton("D45") }
                          { SeatButton("D46") }
                          { SeatButton("D47") }
                          { SeatButton("D48") }
                          { SeatButton("D49") }
                          { SeatButton("D50") }
                        </div>
                      </td>
                      <td>
                        <div className="table__flex">
                          { SeatButton("D51") }
                          { SeatButton("D52") }
                          { SeatButton("D53") }
                          { SeatButton("D54") }
                          { SeatButton("D55") }
                          { SeatButton("D56") }
                          { SeatButton("D57") }
                          { SeatButton("D58") }
                          { SeatButton("D59") }
                          { SeatButton("D60") }
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table__flex">
                          { SeatButton("D21") }
                          { SeatButton("D22") }
                          { SeatButton("D23") }
                          { SeatButton("D24") }
                          { SeatButton("D25") }
                          { SeatButton("D26") }
                          { SeatButton("D27") }
                          { SeatButton("D28") }
                          { SeatButton("D29") }
                          { SeatButton("D30") }
                        </div>
                      </td>
                      <td>
                        <div className="table__flex">
                          { SeatButton("D31") }
                          { SeatButton("D32") }
                          { SeatButton("D33") }
                          { SeatButton("D34") }
                          { SeatButton("D35") }
                          { SeatButton("D36") }
                          { SeatButton("D37") }
                          { SeatButton("D38") }
                          { SeatButton("D39") }
                          { SeatButton("D40") }
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table__flex">
                          { SeatButton("D1") }
                          { SeatButton("D2") }
                          { SeatButton("D3") }
                          { SeatButton("D4") }
                          { SeatButton("D5") }
                          { SeatButton("D6") }
                          { SeatButton("D7") }
                          { SeatButton("D8") }
                          { SeatButton("D9") }
                          { SeatButton("D10") }
                        </div>
                      </td>
                      <td>
                        <div className="table__flex">
                          { SeatButton("D11") }
                          { SeatButton("D12") }
                          { SeatButton("D13") }
                          { SeatButton("D14") }
                          { SeatButton("D15") }
                          { SeatButton("D16") }
                          { SeatButton("D17") }
                          { SeatButton("D18") }
                          { SeatButton("D19") }
                          { SeatButton("D20") }
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            </div>
        </table>
        <div className="table__panggung center">Stage</div>
      </div>
    </>
    );
  };
  
  const SeatButton = (seatID) =>{
    const foundSeat = seats.find(seat => seat.id === seatID);
    
    const handleClick = () =>{
      if (!seat.includes(seatID) && foundSeat && foundSeat.isOrder) {
        window.alert("Seat is on pending now");
      } else if (foundSeat && foundSeat.isAvailable) {
        updateSeatStatus();
      } else{
        window.alert("Seat is not available now");
      }
    }

    const updateSeatStatus = async () => {
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/seat/${seatID}/is_order`, {orderStatus: !foundSeat.isOrder})
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
      if (seat.includes(seatID)){
        return BLUE;
      } else if (!seat.includes(seatID) && foundSeat && foundSeat.isOrder){
        return PURPLE;
      } else if (foundSeat) {
        return foundSeat.isVVIP ? YELLOW : foundSeat.isAvailable ? foundSeat.isVIP ? GOLD : GREEN : RED;
      } else {
        return "#000";
      }
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
