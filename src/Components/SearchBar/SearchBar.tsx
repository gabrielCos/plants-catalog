import React from "react";

import styles from "./SeachBar.module.css";

import { SearchOutlined } from '@ant-design/icons';

const SearchBar: React.FC = () => {
    return (
        <div className={styles.searchBar}>
            <input type="text" name="search" placeholder="Pesquisse pelo nome ou uso da planta" className={styles.inputSearchBar} />
            <SearchOutlined style={{ color: '#777', fontSize: '24px'}}/>
        </div>
    )
}

export default SearchBar;