import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CatalogItem.module.css";

import placeholder from "../../Static/Images/plantSpecific.png";

import Plant from "../../Interfaces/plant";

interface PlantProps {
    plant: Plant;
}

const CatalogItem: React.FC<PlantProps> = ({ plant }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/plant/${encodeURIComponent(plant.name)}`);
    };

    const getImagePath = (plantName: String) => {
        try {
            return require(`../../Static/Images/${plantName.replace(/\s+/g, '_').toLocaleLowerCase()}.jpg`)
        } catch (error) {
            return placeholder;
        }
    }

    return (
        <div className={styles.card} onClick={handleClick}>
            <p className={styles.title}>{plant.name}</p>
            <p className={styles.subtitle}><span className={`${styles.default} ${styles.subtitleLabel}`}>Nome Científico: </span> <span className={styles.cientificName}>{plant.scientificName}</span></p>
            <img src={getImagePath(plant.name)} alt={`Imagem de ${plant.name}`} />
            <p className={`${styles.default} ${styles.indi}`}>Indicação</p>
            <div className={`${styles.default} ${styles.symptoms}`}>
                {plant.symthoms.map((item, index) => (<span className={styles.symptom} key={index}>{item}</span>))}
            </div>
            <div className={`${styles.default} ${styles.sugpul}`}>
                <div>
                    <p className={styles.suglabel}>Sugestão de uso</p>
                    <span className={styles.use}>{plant.prepareMode}</span>
                </div>
                <div>
                    <p className={styles.suglabel}>Parte Utilizada</p>
                    <span className={styles.use}>{plant.partUsed}</span>
                </div>
            </div>
        </div>
    )
}

export default CatalogItem;