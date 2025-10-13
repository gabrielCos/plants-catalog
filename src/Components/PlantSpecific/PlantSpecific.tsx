import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./PlantSpecific.module.css";
import getPlants from "../../Data/Data";
import DetalesCard from "../DetalesCard/DetalesCard";
import { ArrowLeftOutlined } from "@ant-design/icons";

const PlantSpecific: React.FC = () => {
  const { plantName } = useParams<{ plantName: string }>();
  const navigate = useNavigate();

  const [plants, setPlants] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPlants = async () => {
      const data = await getPlants();
      setPlants(data || []);
    };
    fetchPlants();
  }, []);

  const plant = plants.find(
    (p) => p.name === decodeURIComponent(plantName || "")
  );

  const getImagePath = (name: string | undefined) => {
    if (!name) return "/images/Plantas-Horto/0placeholder.png";
    const formattedName = name.replace(/[\s-]+/g, "_").toLowerCase();
    return `/images/Plantas-Horto/${formattedName}.jpg`;
  };

  if (!plant) return <p>Carregando planta...</p>;

  const detales = plant.detales ?? [];
  const total = detales.length;
  const currentDetale = total > 0 ? detales[currentIndex] : null;

  const nextRecipe = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevRecipe = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <div>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        <ArrowLeftOutlined />
        <span>Voltar para o catálogo</span>
      </button>

      <div className={styles.plantSpecifContainer}>
        {/* COLUNA ESQUERDA */}
        <div className={styles.columnOne}>
          <p className={styles.plantName}>{plant.name}</p>

          <div className={styles.otherNames}>
            {(plant.otherNames ?? []).map((item: string, index: number) => (
              <span className={styles.otherNames} key={index}>
                {item}
                {index < (plant.otherNames?.length ?? 0) - 1 ? ", " : ""}
              </span>
            ))}
          </div>

          <p className={styles.scientificName}>{plant.scientificName}</p>

          <img
            className={styles.imagePlant}
            src={getImagePath(plant.name)}
            alt={`Imagem de ${plant.name}`}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.endsWith(".jpg")) {
                target.src = target.src.replace(".jpg", ".png");
              } else {
                target.onerror = null;
                target.src = "/images/Plantas-Horto/0placeholder.png";
              }
            }}
          />

          <p className={styles.indicationsLabel}>Indicação</p>
          <div className={styles.indicationsContainer}>
            {(plant.symptoms ?? []).map((symptom: string, index: number) => (
              <p key={index} className={styles.indications}>
                {symptom}
              </p>
            ))}
          </div>
        </div>

        {/* COLUNA DIREITA - CARD DE RECEITA */}
        <div className={styles.detalesWrapper}>
          {total > 0 && currentDetale ? (
            <DetalesCard
              plant={plant}
              detale={currentDetale}
              onNext={nextRecipe}
              onPrev={prevRecipe}
              currentIndex={currentIndex}
              total={total}
            />
          ) : (
            <p>❌ Nenhuma receita cadastrada.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantSpecific;
