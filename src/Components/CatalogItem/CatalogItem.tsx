import React from "react";
import styles from "./CatalogItem.module.css";
import placeholder from "../../Static/Images/image.png";

const CatalogItem: React.FC = () => {
    return (
        <div className={styles.card}>
            <p className={styles.title}>Chambá (Anador, Trevo-Cumaru)</p>
            <p className={styles.subtitle}><span className={`${styles.default} ${styles.subtitleLabel}`}>Nome Científico: </span> <span className={styles.cientificName}>Justicia pectoralis</span></p>
            <img src={placeholder} />
            <p className={`${styles.default} ${styles.indi}`}>Indicação</p>
            <div className={`${styles.default} ${styles.symptoms}`}>
                <span className={styles.symptom}>crises de asma</span>
                <span className={styles.symptom}>tosse</span>
                <span className={styles.symptom}>bronquite</span>
                <span className={styles.symptom}>chiado no peito</span>
            </div>
            <div className={`${styles.default} ${styles.sugpul}`}>
                <div>
                    <p className={styles.suglabel}>Sugestão de uso</p>
                    <span className={styles.use}>chá</span>
                </div>
                <div>
                    <p className={styles.suglabel}>Parte Utilizada</p>
                    <span className={styles.use}>folha</span>
                </div>
            </div>
        </div>
    )
}

export default CatalogItem;