import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./PlantSpecific.module.css";

import plantSpecific from "../../Static/Images/plantSpecific.png"

import dummyData from "../../Data/Data";

import { ArrowLeftOutlined } from '@ant-design/icons';

const PlantSpecific: React.FC = () => {
    const { plantName } = useParams<{ plantName: string }>();
    const navigate = useNavigate();

    const plant = dummyData.find((p) => p.name === decodeURIComponent(plantName || ""));

    return (
        <div>
            <button className={styles.backButton} onClick={() => navigate("/")}>
                    <ArrowLeftOutlined />
                    <span>Voltar para o catalogo</span>
            </button>
            <div className={styles.plantSpecifContainer}>
                <div className={styles.columnOne}>
                    <p className={styles.plantName}>{ plant?.name}</p>
                    <p className={styles.scientificName}>{plant?.scientificName}</p>
                    <img src={plantSpecific} />
                    <p className={styles.indicationsLabel}>Indicação</p>
                    <div className={styles.indicationsContainer}>
                        {plant?.symthoms.map((symptom, index) => (
                            <p key={index} className={styles.indications}>{symptom}</p>
                        ))}
                    </div>
                </div>
                <div className={styles.columnTwo}>
                    <div className={styles.prepareContainer}>
                        <div className={styles.instructions}>
                            <p className={styles.instructionsLabel}>Modo de preparo</p>
                            <p className={styles.instructionsTitle}>{plant?.prepareMode} de {plant?.name}</p>
                            <p className={styles.ingredientsLable}>Ingredientes:</p>
                            <ul className={styles.ingredients}>
                                {plant?.Ingridients.map((ingrient, index) => (
                                    <li key={index}>{ingrient}</li>
                                ))}
                            </ul>
                            <p className={styles.ingredientsLable}>Passos:</p>
                            <ol className={styles.ingredients}>
                                {plant?.HowToDo.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                            <p className={styles.ingredientsLable}>Recomendação de Uso:</p>
                            <p className={styles.use}>{ plant?.useRecomendation}</p>
                        </div>
                    </div>
                    <div className={styles.prepareContainer}>
                        <div className={styles.instructions}>
                            <p className={styles.contraindicationLabel}>Contra indicações</p>
                            {plant?.contraindication.map((item, index) => (
                                <p key={index} className={styles.contraindications}>{item}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantSpecific;