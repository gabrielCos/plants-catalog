import React from "react";

import CatalogItem from "../CatalogItem/CatalogItem";
import SearchBar from "../SearchBar/SearchBar";

import styles from "./Catalog.module.css";

import Plant from "../../Interfaces/plant";

interface CatalogProps {
    plants: Plant[];
}
  


const Catalog: React.FC<CatalogProps> = ({plants}) => {
    return (
        <div className={styles.catalog}>
            {plants.map((plant, index) => (
                <CatalogItem key={index} plant={plant} />
            ))}
       </div>
    )
}

export default Catalog;