const Donate = () => {
    return(
        <>
            <div className="about">
                <div className="content">
                    <div className="donate">
                        <h1>Donate</h1>
                        <div class="input-group">
                            <span class="input-group-addon">
                                Rp
                            </span>
                            <input type="number"/>
                        </div>
                        <button id="donate-button">Donate</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Donate;