import { Link } from "react-router-dom";

const Success = () => {
    return(
        <>
            <div className="about">
                <div className="content success">
                    <span>
                        <h1>Transaksi sukses!</h1> 
                        <strong>&#x2713;</strong>
                    </span>
                    <br/>
                    <hr/>
                    <br/>
                    <p>Kami mengucapkan terima kasih yang tulus atas sumbangan besar hati Anda untuk Konser Amal Canisius. Dukungan Anda akan secara langsung memengaruhi inisiatif pendidikan di Keuskupan Ketapang, Kalimantan Barat, memberikan sumber daya yang tak ternilai bagi para siswa dan pendidik.</p>
                    <p>Dengan kontribusi Anda, kami menjadi satu langkah lebih dekat untuk mewujudkan misi kami dalam memajukan masa depan yang lebih cerah melalui pendidikan. Kebaikan dan kedermawanan Anda mencerminkan semangat kasih dan solidaritas.</p>
                    <br/>
                    <p>Jangan lupa untuk hadir kegiatan Charity Concert di Kolese Kanisius, Jl. Menteng Raya No.64.</p>
                    <p>Salam hangat, Kolese Kanisius</p>
                    <br/>
                    <h3>&#x24D8; Untuk melihat detail transaksi dan bukti pembayaran, silahkan cek e-mail yang Anda gunakan untuk mendaftar</h3>
                    <button><Link to="/">Go Back</Link></button>
                </div>
            </div>
        </>
    );
}

export default Success;