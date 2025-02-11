import React from "react";

import CatalogItem from "../CatalogItem/CatalogItem";

import styles from "./Catalog.module.css";

import Plant from "../../Interfaces/plant";

interface CatalogProps {
    plants: Plant[];
    searchTerm: String;
}

const Catalog: React.FC<CatalogProps> = ({ plants, searchTerm }) => {
    const lowerCaseSearch = searchTerm.toLowerCase();

    const filteredPlants = plants.filter(
        (plant) => 
            plant.name.toLocaleLowerCase().includes(lowerCaseSearch) ||
            plant.symthoms.some(symthom => symthom.toLowerCase().includes(lowerCaseSearch))
    );

    return (
        <div className={styles.catalog}>
            {filteredPlants.map((plant, index) => (
                <CatalogItem key={index} plant={plant} />
            ))}
       </div>
    )
}

export default Catalog;