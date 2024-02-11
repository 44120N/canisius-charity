import { useState, useEffect } from "react";
import { useSeat } from '../SeatContext';
import SeatLayout from '../components/SeatRender';
import SeatLogic from '../components/SeatLogic';
import Popup from '../components/Popup';

const Home = () => {
    const date = "23-02-2024";
    const time = "09:00";
    const { seat, cost } = useSeat();
    const [timedPopup, setTimedPopup] = useState(false);
    const GREEN = 'var(--green-color)';
    useEffect(()=>{
        setTimeout(()=>{
            setTimedPopup(true);
        }, 3000);
    }, []);

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    }

    return (
        <div className="about">
            <div className="content">
                <div className="info">
                    <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                        <h2>Prosedur Pemesanan Tiket</h2>
                        <ol>
                            <li>Wajib login menggunakan <strong>akun google</strong> sebelum memesan tiket.</li>
                            <li>Setelah login, gambar icon profile google serta tombol "Order Seat" berwarna <span style={{color:GREEN}}>hijau</span>. <br></br>Apabila login gagal, silahkan memeriksa ulang jaringan internet.</li>
                            <li>Pilihlah tempat duduk yang dikehendaki. Maksimal 5 kursi dalam satu pemesanan.</li>
                            <li>Apabila sudah selesai memilih, tekan tombol "Order Seat".</li>
                            <li>Waktu pembayaran yang tersedia adalah 15 menit.</li>
                            <li>Setelah melakukan transaksi, periksalah konfirmasi pembayaran dikirim ke email.</li>
                        </ol>
                    </Popup>


                    <div className="seat__info">
                        <span>
                            <i className="ri-square-fill" id='green'></i>
                            <p>Available</p>
                        </span>
                        <span>
                            <i className="ri-square-fill" id='blue'></i>
                            <p>Selected</p>
                        </span>
                        <span>
                            <i className="ri-square-fill" id='yellow'></i>
                            <p>VVIP</p>
                        </span>
                        <span>
                            <i className="ri-square-fill" id='gold'></i>
                            <p>VIP</p>
                        </span>
                        <span>
                            <i className="ri-square-fill" id='red'></i>
                            <p>Sold</p>
                        </span>
                        <span>
                            <i className="ri-square-fill" id='purple'></i>
                            <p>Pending</p>
                        </span>
                        <span>
                            <i className="ri-square-fill" id='black'></i>
                            <p>Reserved</p>
                        </span>
                    </div>
                    <div className="seperator"></div>
                    <div className="event__info">
                        <h3>Canisius College Charity Concert</h3>
                        <p>Seats: { seat.sort().join(", ") }</p>
                        <p>Date: { date }, Time: { time }</p>
                        <p>Total Payment: { rupiah(cost) }</p>  
                    </div>
                </div>
                <div className="seats">
                    <SeatLayout />
                </div>
                <div className="center">
                    <SeatLogic />
                </div>
            </div>
        </div>
    );
}

export default Home;