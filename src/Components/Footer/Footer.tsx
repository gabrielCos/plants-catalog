import React from "react";
import styles from "./Footer.module.css"

import logofarviva from "../../Static/Images/logo-farmacia-viva-1 1.png";
import logoufc from "../../Static/Images/image 345.png"

import logoloca from "../../Static/Images/Icon local.png";
import logomessage from "../../Static/Images/Icon message.png";
import logofone from "../../Static/Images/Icon fone.png";


const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.up}>
                <p>Horto de Plantas Medicinais<br />Prof. Francisco José de Abreu Matos</p>
                <div className={styles.upimgs}>
                    <img src={logofarviva} className={styles.logofamviva} alt="logo" />
                    <img src={logoufc} alt="logo" />
                </div>
            </div>
            <div className={styles.middle} />
            <div className={styles.down}>
                <div className={styles.downData}>
                    <img src={logoloca} alt="logo" />
                    <p>Campus do Pici - Bloco 941 - Fortaleza - CE - CEP 60.020-181</p>
                </div>
                <div className={styles.downData}>
                    <img src={logofone} alt="logo" />
                    <p>(85)3366-9418</p>
                </div>
                <div className={styles.downData}>
                    <img src={logomessage} alt="logo" />
                    <p>farmaciaviva@ufc.br</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;