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
                            <p className={styles.instructionsTitle}>Chá de Chambá</p>
                            <p className={styles.ingredientsLable}>Ingredientes:</p>
                            <ul className={styles.ingredients}>
                                <li>1 copo de água fervida ou filtrada</li>
                                <li>1 xíxara e meia de folhas de chambá (bem lavadas e cortadas em pedaços)</li>
                            </ul>
                            <p className={styles.ingredientsLable}>Passos:</p>
                            <ol className={styles.ingredients}>
                                <li>Cozinhe as folhas até que exalem um aroma parecido com o do cumaru.</li>
                                <li>Em seguida, coe as folhas e reserve o chá em um recipiente.</li>
                            </ol>
                            <p className={styles.ingredientsLable}>Recomendação de Uso:</p>
                            <p className={styles.use}>Consumir o chá 2x ao dia e manter o tratamento durante 1 semana</p>
                        </div>
                    </div>
                    <div className={styles.prepareContainer}>
                        <div className={styles.instructions}>
                            <p className={styles.contraindicationLabel}>Contra indicações</p>
                            <p className={styles.contraindications}>Crianças menores de 6 anos, Gestantes, Lactantes.</p>
                            <p className={styles.contraindications}>Não deve ser usada conjuntamente com anticoagulantes ou em pacientes com transtornos circulatórios</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantSpecific;