import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerElements}>
                <div className={styles.logo}>
                    <div className={`${styles.circle} ${styles.green}`}></div>
                    <div className={styles.logoElements}>
                        <div className={`${styles.circle} ${styles.blue}`}></div>
                        <div className={`${styles.circle} ${styles.orange}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;