import React from "react";

import styles from "./PlantSpecific.module.css";

import plantSpecific from "../../Static/Images/plantSpecific.png"

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
                    <img src={plantSpecific} />
                    <p className={styles.indicationsLabel}>Indicação</p>
                    <div className={styles.indicationsContainer}>
                        <p className={styles.indications}>Crises de asma</p>
                        <p className={styles.indications}>Tosse</p>
                        <p className={styles.indications}>Bronquite</p>
                        <p className={styles.indications}>Chiado no peito</p>
                    </div>
                </div>
                <div className={styles.columnTwo}>
                    <div className={styles.prepareContainer}>
                        <div className={styles.instructions}>
                            <p className={styles.instructionsLabel}>Modo de preparo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantSpecific;