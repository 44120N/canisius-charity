import { format } from 'date-fns'
import { useState, useEffect } from "react";
import { useSeat } from '../SeatContext';
import SeatLayout from '../components/SeatRender';
import SeatLogic from '../components/SeatLogic';
import Popup from '../components/Popup';

const Home = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const { seat, cost } = useSeat();
    const [timedPopup, setTimedPopup] = useState(false);
    const GREEN = 'var(--green-color-full)';
    const RED = 'var(--red-color)';
    useEffect(()=>{
        setTimeout(()=>{
            setTimedPopup(true);
        }, 1000);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000);
    
        return () => clearInterval(intervalId);
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
                            <li>Waktu pembayaran yang tersedia adalah 30 menit.</li>
                            <li>Setelah melakukan transaksi, periksalah konfirmasi pembayaran dikirim ke email.</li>
                            <li>Bagi yang ingin berdonasi silahkan menuju ke link <i>Donate</i></li>
                            <li>Bila terdapat masalah, silahkan hubungi nomor WA di paling bawah</li>
                            <br></br>
                            <h3><strong style={{color:RED}}>Mohon bersabar ketika memencet tombol tempat duduk. <br></br>Sistem memerlukan beberapa detik untuk merespon order Anda, tidak disarankan untuk menekan tombol berkali-kali.</strong></h3>
                            <br></br>
                            <h3><strong style={{color:RED}}>Mohon mengecek email yang Anda gunakan dalam pembayaran secara berkala untuk status orderan Anda.</strong></h3>
                            <br></br>
                            <h3><strong style={{color:RED}}>Bila semua tempat duduk bewarna hitam, maka server sedang diperbaiki</strong></h3>
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
                    </div>
                    <div className="seperator"></div>
                    <div className="event__info">
                        <h3>Canisius College Charity Concert</h3>
                        <p>Seats: { seat.sort().join(", ") }</p>
                        <p>Date: { format(currentDate, 'dd/MM/yyyy, HH:mm:ss') }</p>
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