import React, {useState} from "react";

import CatalogItem from "../CatalogItem/CatalogItem";

import styles from "./Catalog.module.css";

import Plant from "../../Interfaces/plant";

interface CatalogProps {
    plants: Plant[];
    searchTerm: String;
}

const Catalog: React.FC<CatalogProps> = ({ plants, searchTerm }) => {
    const [visibleCount, setVisibleCount] = useState(6);

    const lowerCaseSearch = searchTerm.toLowerCase();

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    }

    const filteredPlants = plants.filter(
        (plant) => 
            plant.name.toLocaleLowerCase().includes(lowerCaseSearch) ||
            plant.symthoms.some(symthom => symthom.toLowerCase().includes(lowerCaseSearch))
    );

    return (
        <div className={styles.catalog}>
            {filteredPlants.slice(0,visibleCount).map((plant, index) => (
                <CatalogItem key={index} plant={plant} />
            ))}

            {visibleCount < filteredPlants.length && (
                <button onClick={loadMore} className={styles.loadMoreButton}>
                    Carregar Mais
                </button>
            )}
       </div>
    )
}

export default Catalog;