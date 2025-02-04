import React from "react";

import styles from "./PlantSpecific.module.css";

const PlantSpecific: React.FC = () => {
    return (
        <div>
            <button className={styles.backButton}>
                Voltar para o catalogo
            </button>
        </div>
    )
}

export default PlantSpecific;