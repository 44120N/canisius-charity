import { useSeat } from '../SeatContext';
import SeatLayout from '../components/SeatRender';
import SeatLogic from '../components/SeatLogic';

const Home = () => {
    const date = "01-02-2024";
    const time = "09:00";
    const { seat, cost } = useSeat();
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
                            <i className="ri-square-fill" id='gold'></i>
                            <p>VIP</p>
                        </span>
                        <span>
                            <i className="ri-square-fill" id='red'></i>
                            <p>Sold</p>
                        </span>
                    </div>
                    <div className="seperator"></div>
                    <div className="event__info">
                        <h3>Canisius College Event</h3>
                        <p>Seats: { seat.sort().join(", ") }</p>
                        <p>Date: { date }, Time: { time }</p>
                        <p>Total Payment: { cost }</p>
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