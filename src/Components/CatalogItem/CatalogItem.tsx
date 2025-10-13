import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CatalogItem.module.css";

import Plant from "../../Interfaces/plant";

interface PlantProps {
    plant: Plant;
}

const CatalogItem: React.FC<PlantProps> = ({ plant }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/plant/${encodeURIComponent(plant.name)}`);
    };

    const getImagePath = (plantName: String | undefined) => {
        if (!plantName) return "../images/Plantas-Horto/0placeholder.png";
        const formattedName = plantName
            .replace(/[\s-]+/g, "_")
            .toLowerCase();
        //console.log("Imagem gerada:", formattedName);
        return `/images/Plantas-Horto/${formattedName}.jpg`;
    }

    return (
        <div className={styles.card} onClick={handleClick}>
            <p className={styles.title}>{plant.name}</p>
            <div className={styles.default}>
                <span className={styles.subtitleLabel}>Outros Nomes: </span>
                {plant.otherNames?.map((item, index) => (<span className={styles.otherNames} key={index} >{item} {index < plant.otherNames!.length - 1 ? ', ' : ''}</span>))}
            </div>
            <div className={styles.default}>
                <span className={`${styles.subtitle} ${styles.subtitleLabel}`}>Nome Científico: </span>
                <span className={styles.cientificName}>{plant.scientificName}</span>
            </div>
            <img src={getImagePath(plant.name)}
                alt={`Imagem de ${plant.name}`}
                onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith(".jpg")) {
                        target.src = target.src.replace(".jpg", ".png");
                    } else {
                        target.onerror = null; 
                        target.src = "/images/Plantas-Horto/0placeholder.png";
                    }
                }}
            />
            <p className={`${styles.default} ${styles.indi}`}>Indicação</p>
            <div className={`${styles.default} ${styles.symptoms}`}>
                {plant.symptoms.map((item, index) => (<span className={styles.symptom} key={index}>{item}</span>))}
            </div>
        </div>
    )
}

export default CatalogItem;