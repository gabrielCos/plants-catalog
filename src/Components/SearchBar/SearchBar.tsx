import React, {useState} from "react";

import styles from "./SeachBar.module.css";

import { SearchOutlined } from '@ant-design/icons';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchItem, setSearchItem] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchItem(value);
        onSearch(value);
    }

    return (
        <div className={styles.searchBar}>
            <input type="text" name="search" value={searchItem} onChange={handleChange} placeholder="Pesquisse pelo nome ou uso da planta" className={styles.inputSearchBar} />
            <SearchOutlined style={{ color: '#777', fontSize: '24px'}}/>
        </div>
    )
}

export default SearchBar;