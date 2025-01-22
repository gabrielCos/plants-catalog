import React from "react";
import styles from "./Header.module.css";

import SearchBar from "../SearchBar/SearchBar";

const Header: React.FC = () => {
    return (
        <div className={styles.containerHeader}>
            <div className={styles.header}>
                <div className={styles.headerElements}>
                    <div className={styles.logo}>
                        <div className={`${styles.circle} ${styles.green}`}></div>
                        <div className={styles.logoElements}>
                            <div className={`${styles.circle} ${styles.blue}`}></div>
                            <div className={`${styles.circle} ${styles.orange}`}></div>
                        </div>
                    </div>
                    <p className={styles.title}>Catálogo Farmácia Viva </p>
                    <p className={styles.option}>Catálogo</p>
                    <p className={styles.option}>Sobre</p>
                </div>
                <SearchBar />
            </div>
        </div>
    )
}

export default Header;