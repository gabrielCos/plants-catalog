import React from "react";

import styles from "./DetalesCard.module.css";

import Plant from "../../Interfaces/plant";

interface PlantProps {
    plant: Plant;
}

const DetalesCard: React.FC<PlantProps> = ({plant}) => { 
    return (
            <div className={styles.detalesContainer}>
                    <div className={styles.container}>
                        <div className={styles.instructions}>
                            <p className={styles.instructionsLabel}>Modo de preparo</p>
                            <p className={styles.instructionsTitle}>{plant?.prepareMode} de {plant?.name}</p>
                            <p className={styles.ingredientsLable}>Ingredientes:</p>
                            <ul className={styles.ingredients}>
                                {plant?.Ingridients.map((ingrient: string, index: number) => (
                                    <li key={index}>{ingrient}</li>
                                ))}
                            </ul>
                            <p className={styles.ingredientsLable}>Passos:</p>
                            <ol className={styles.ingredients}>
                                {plant?.HowToDo.map((step: string, index: number) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                            <p className={styles.ingredientsLable}>Recomendação de Uso:</p>
                            <p className={styles.use}>{ plant?.useRecomendation}</p>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.instructions}>
                            <p className={styles.contraindicationLabel}>Contra indicações</p>
                            {plant?.contraindication.map((item: string, index:number) => (
                                <p key={index} className={styles.contraindications}>{item}</p>
                            ))}
                        </div>
                    </div>
            </div>
    )
}

export default DetalesCard;