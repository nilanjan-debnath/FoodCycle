import React from "react";
import styles from "../components/css/footer.module.css";
import logo from "../../public/images/logo.png";

function Footer() {
    return (
        <>
            <footer className={`${styles.footer}`}>
                <div className={`${styles.box}`}>
                    <ul>
                        <li id={`${styles.footerHead}`}>Get Help</li>
                        <li><a href="">Find Food <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">Food & Medical Benefits <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">Job Training <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">Resources for Families <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">Nutrition Resour <i class="fa-solid fa-play"></i></a></li>
                    </ul>
                </div>
                <div className={`${styles.box}`}>
                    <ul>
                    <li id={`${styles.footerHead}`}>Take Action</li>
                        <li><a href="">Give <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">Volunteer <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">Advance <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">Learn <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">Make Donation <i class="fa-solid fa-play"></i></a></li>
                    </ul>
                </div>
                <div className={`${styles.box}`}>
                    <ul>
                    <li id={`${styles.footerHead}`}>Our Story</li>
                        <li><a href="">History <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">Out Team <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">How we htlp <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">Blog <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">News and press <i class="fa-solid fa-play"></i></a></li>
                    </ul>
                </div>
                <div className={`${styles.box}`}>
                    <ul>
                        <li id={`${styles.footerHead}`}>Links</li>
                        <li><a href="">Contact <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">Carrers <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">Staff Login <i class="fa-solid fa-play"></i></a></li>
                        <li><a href="">Location <i class="fa-solid fa-play"></i></a></li>
                    </ul>
                </div>
                <div className={`${styles.box}`}>
                    <ul>
                        <li className={`${styles.textWhite}`}>4100 W. Ann Lurie Place</li>
                        <li className={`${styles.textWhite}`}>Kolkata 700162</li>
                        <li className={`${styles.textWhite}`}>Phone: 773-247-3663</li>
                    </ul>
                    <img id={`${styles.footerLogo}`} src={logo} alt="" />
                </div>
            </footer>
        </>
    )
}

export default Footer;