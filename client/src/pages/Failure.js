import { Link } from "react-router-dom";

const Failure = () => {
    return(
        <>
            <div className="about">
                <div className="content failure">
                    <span>
                        <h1>Transaksi gagal!</h1>
                        <strong>&#10060;</strong>
                    </span>
                    <br/>
                    <hr/>
                    <br/>
                    <p>Transaksi Gagal, silahkan kembali ke halaman utama dan ulangi transaksi bila di inginkan!</p>
                    <br/>
                    <h3>&#x24D8; Apabila masalah berlanjut, silahkan hubungi admin</h3>
                    <button><Link to="/">Go Back</Link></button>
                </div>
            </div>
        </>
    );
}

export default Failure;