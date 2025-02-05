import React from "react";

import styles from "./PlantSpecific.module.css";

import { ArrowLeftOutlined } from '@ant-design/icons';

const PlantSpecific: React.FC = () => {
    return (
        <div>
            <button className={styles.backButton}>
                    <ArrowLeftOutlined />
                    <span>Voltar para o catalogo</span>
            </button>
            <div className={styles.plantSpecifContainer}>
                <div className={styles.columnOne}>
                    <p className={styles.plantName}>Chambá (Anador, Trevo-Cumaru)</p>
                    <p className={styles.scientificName}>Justicia pectoralis</p>
                </div>
            </div>
        </div>
    )
}

export default PlantSpecific;