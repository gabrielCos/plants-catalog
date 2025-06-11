import React, {useState, useEffect} from "react";
import { useNavigate, useParams, } from "react-router-dom";

import styles from "./PlantSpecific.module.css";

import getPlants from "../../Data/Data";

import { ArrowLeftOutlined } from '@ant-design/icons';

const PlantSpecific: React.FC = () => {
    const { plantName } = useParams<{ plantName: string }>();
    const navigate = useNavigate();

    const [plants, setPlants] = useState<any[]>([]);

    useEffect(() => {
        const fetchPlants = async () => {
            const data = await getPlants(); 
            setPlants(data); 
        };
        fetchPlants();
    }, []);

    const plant = plants.find((p) => p.name === decodeURIComponent(plantName || ""));

    const getImagePath = (name: String | undefined) => {
        if (!name) return "/images/Plantas-Horto/0placeholder.png";
        const formattedName = name.replace(/[\s-]+/g, "_").toLowerCase();
        return `/images/Plantas-Horto/${formattedName}.jpg`;
    }

    if (!plant) {
        return <p>Planta não encontrada</p>;  
    }

    return (
        <div>
            <button className={styles.backButton} onClick={() => navigate("/")}>
                    <ArrowLeftOutlined />
                    <span>Voltar para o catalogo</span>
            </button>
            <div className={styles.plantSpecifContainer}>
                <div className={styles.columnOne}>
                    <p className={styles.plantName}>{plant?.name}</p>
                <div className={styles.otherNames}>
                    {plant.otherNames?.map((item: string, index: number) => (<span className={styles.otherNames} key={index} >{item} {index < plant.otherNames!.length - 1 ? ', ' : ''}</span>))}
                </div>
                    <p className={styles.scientificName}>{plant?.scientificName}</p>
                    <img className={styles.imagePlant}
                        src={getImagePath(plant?.name)}
                        alt={`Imagem de ${plant?.name}`}
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
                        {plant?.symthoms.map((symptom: string, index:number) => (
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
                    <div className={styles.prepareContainer}>
                        <div className={styles.instructions}>
                            <p className={styles.contraindicationLabel}>Contra indicações</p>
                            {plant?.contraindication.map((item: string, index:number) => (
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