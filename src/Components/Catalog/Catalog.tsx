import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
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