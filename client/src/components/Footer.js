import './Footer.css'
import logo_footer from "../assets/cc_footer.png"
const Footer = () => {
    return(
        <>
            <footer className="footer">
                <img src={logo_footer} alt="Logo"/>
                <ul className="social-icon">
                    <li><a href="https://wa.me/628111826464/"><i className="ri-whatsapp-line"></i></a></li>
                </ul>
                <p>© Copyright 2024 | All Rights Reserved</p>
                <p>Canisius College</p>
            </footer>
        </>
    );
}

export default Footer;