import React from "react";

import styles from "./CatalogItem.module.css";

import placeholder from "../../Static/Images/image.png";

import Plant from "../../Interfaces/plant";

interface PlantProps {
    plant: Plant;
}

const CatalogItem: React.FC<PlantProps> = ({ plant }) => {
    return (
        <div className={styles.card}>
            <p className={styles.title}>{plant.name}</p>
            <p className={styles.subtitle}><span className={`${styles.default} ${styles.subtitleLabel}`}>Nome Científico: </span> <span className={styles.cientificName}>{plant.scientificName}</span></p>
            <img src={placeholder} />
            <p className={`${styles.default} ${styles.indi}`}>Indicação</p>
            <div className={`${styles.default} ${styles.symptoms}`}>
                {plant.symthons.map((item, index) => (<span className={styles.symptom} key={index}>{item}</span>))}
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