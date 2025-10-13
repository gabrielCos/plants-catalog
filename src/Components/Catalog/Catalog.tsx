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
        setVisibleCount((prevCount) => prevCount + 3);
    }

    const filteredPlants = plants
        .filter((plant) =>
            plant.name.toLowerCase().includes(lowerCaseSearch) ||
            plant.scientificName.toLowerCase().includes(lowerCaseSearch) ||
            plant.symptoms.some(symthom => symthom.toLowerCase().includes(lowerCaseSearch)) ||
            (plant.otherNames?.some(otherName =>
                otherName.toLowerCase().includes(lowerCaseSearch)
                ) ?? false)
            )
            .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div>
            <p className={styles.warning}>O catálogo ainda precisa de revisão de suas informações!</p>
            <div className={styles.catalog}>
                {filteredPlants.slice(0,visibleCount).map((plant, index) => (
                    <CatalogItem key={index} plant={plant} />
                ))}

                
                {filteredPlants.length === 0 && (
                    <div className={styles.empity}>
                        <p>Planta não encontrada!</p>
                    </div>
                )}
            </div>
            <div className={styles.buttonContainer}>
                {visibleCount < filteredPlants.length && (
                        <button onClick={loadMore} className={styles.loadMoreButton}>
                            Carregar Mais
                        </button>
                    )}
            </div>
        </div>
    )
}

export default Catalog;