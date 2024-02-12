import DonateLogic from "../components/DonateLogic";
const Donate = () => {
    return(
        <>
            <div className="about">
                <div className="content">
                    <div className="donate">
                        <h1>Donate</h1>
                        <p>Bagi yang ingin berkontribusi dalam acara ini, silahkan berdonasi</p>
                        <DonateLogic />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Donate;