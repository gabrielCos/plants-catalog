import React from "react";
import styles from "./DetalesCard.module.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import Detales from "../../Interfaces/detales";
import Plant from "../../Interfaces/plant";

interface DetalesCardProps {
  plant: Plant;
  detale: Detales;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  total: number;
}

const DetalesCard: React.FC<DetalesCardProps> = ({
  plant,
  detale,
  onNext,
  onPrev,
  currentIndex,
  total,
}) => {
  return (
    <div className={styles.detalesCard}>
      {/* Botão esquerdo */}
      <button
        className={`${styles.arrowButton} ${styles.leftArrow}`}
        onClick={onPrev}
        aria-label="Receita anterior"
      >
        <LeftOutlined />
      </button>

      <div className={styles.detalesContainer}>
        <div className={styles.instructions}>
          <p className={styles.instructionsLabel}>
            Receita {currentIndex + 1} de {total} (use as setas para navegar entre receitas)
          </p>
          <p className={styles.instructionsTitle}>
            {detale.title || `Receita com ${plant.name}`}
          </p>

          <p className={styles.labelModel}>Modo de preparo: {detale.prepareMode}</p>

          <p className={styles.labelModel}>Ingredientes:</p>
          <ul className={styles.ulCard}>
            {detale.ingredients?.map((ingredient: string, i: number) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>

          <p className={styles.labelModel}>Passos:</p>
          <ol className={styles.ulCard}>
            {detale.howToDo?.map((step: string, i: number) => (
              <li key={i}>{step}</li>
            ))}
          </ol>

          <p className={styles.labelModel}>Recomendações de uso:</p>
          <ul className={styles.ulCard}>
            {detale.useRecommendations?.map((rec: string, i: number) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>

            <p className={styles.labelModel}>Contraindicações:</p>
          <ul className={styles.ulCard}>       
          {detale.contraindications?.map((item: string, i: number) => (
            <li key={i} className={styles.contraindications}>
              {item}
            </li>
          ))}
        </ul> 
        </div>
      </div>

      {/* Botão direito */}
      <button
        className={`${styles.arrowButton} ${styles.rightArrow}`}
        onClick={onNext}
        aria-label="Próxima receita"
      >
        <RightOutlined />
      </button>
    </div>
  );
};

export default DetalesCard;
