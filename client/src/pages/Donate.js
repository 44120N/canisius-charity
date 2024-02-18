import DonateLogic from "../components/DonateLogic";

const Donate = () => {
    return(
        <>
            <div className="about">
                <div className="content" style={{width: "50vw"}}>
                    <div className="center">
                        <div className="donate">
                            <h1 style={{textAlign: "center"}}>Donate</h1>
                            <p>For those who want to donate us, please click the button below</p>
                            <DonateLogic />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Donate;