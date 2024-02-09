import { useSeat } from '../SeatContext';
import SeatLayout from '../components/SeatRender';
import SeatLogic from '../components/SeatLogic';
// import Popup from '../components/Popup';

const Home = () => {
    const date = "23-02-2024";
    const time = "09:00";
    const { seat, cost } = useSeat();

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
                <div className='center'>
                    <SeatLogic />
                </div>
            </div>
        </div>
    );
}

export default Home;