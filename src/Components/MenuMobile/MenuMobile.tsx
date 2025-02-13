import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./MenuMobile.module.css";



const MenuMobile: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.MenuMobile}>
            <p onClick={() => navigate("/")}>Catálogo</p>
            <p>Sobre</p>
        </div>
    )
}

export default MenuMobile;