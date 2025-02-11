import React, {useState, useEffect} from "react";
import styles from "./Header.module.css";

import SearchBar from "../SearchBar/SearchBar";

interface HeaderProps {
    onSearch: (searchTerm: string) => void;
}
  

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1280);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [] )

    return (
        <>
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
                    {!isMobile && <SearchBar onSearch={onSearch} />}
                </div>
            </div>
            {isMobile && <SearchBar onSearch={onSearch} />}
        </>
    )
}

export default Header;