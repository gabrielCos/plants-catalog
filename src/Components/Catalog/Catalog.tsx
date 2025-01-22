import React from "react";

import CatalogItem from "../CatalogItem/CatalogItem";
import SearchBar from "../SearchBar/SearchBar";

import styles from "./Catalog.module.css";



const Catalog: React.FC = () => {
    return (
        <div className={styles.catalog}>
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
       </div>
    )
}

export default Catalog;