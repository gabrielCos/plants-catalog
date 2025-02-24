import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Header.module.css";

import SearchBar from "../SearchBar/SearchBar";
import MenuMobile from "../MenuMobile/MenuMobile";

import { MenuOutlined } from '@ant-design/icons';

interface HeaderProps {
    onSearch: (searchTerm: string) => void;
}
  

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1280);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [])
    
    const handleMenuMobile = () => {
        if (showMenu == false) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }

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
                        <p className={styles.title}>Herbarium Digital </p>
                        <p className={styles.option} onClick={() => navigate("/")}>Catálogo</p>
                        <p className={styles.option}>Sobre</p>
                    </div>
                    {!isMobile && <SearchBar onSearch={onSearch} />}
                    {isMobile && <MenuOutlined className={styles.menuIcon} onClick={handleMenuMobile}/>}
                    {showMenu && <MenuMobile />}
                </div>
            </div>
            {isMobile && <SearchBar onSearch={onSearch} />}
        </>
    )
}

export default Header;