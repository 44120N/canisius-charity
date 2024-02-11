import './Footer.css'
import logo_footer from "../assets/cc_footer.png"
const Footer = () => {
    return(
        <>
            <footer className="footer">
                <img src={logo_footer} alt="Logo"/>
                <ul className="social-icon">
                    <li><a href="https://wa.me/628159293778/"><i className="ri-whatsapp-line"></i></a></li>
                    <li><a href="https://www.instagram.com/aaronh28/"><i className="ri-instagram-line"></i></a></li>
                    <li><a href="https://github.com/44120N"><i className="ri-github-fill"></i></a></li>
                    <li><a href='#'><i className="ri-facebook-box-line"></i></a></li>
                </ul>
                <p>© Copyright 2024 | All Rights Reserved</p>
                <p>Canisius College</p>
            </footer>
        </>
    );
}

export default Footer;