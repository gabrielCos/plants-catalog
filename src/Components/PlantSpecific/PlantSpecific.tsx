import React, {useState, useEffect} from "react";
import { useNavigate, useParams, } from "react-router-dom";

import styles from "./PlantSpecific.module.css";

import placeholder from "../../Static/Images/plantSpecific.png"

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
        if (!name) return placeholder;

        const formattedName = name.replace(/\s+/g, '_').toLocaleLowerCase();

        try {
                return require(`../../Static/Images/${formattedName}.jpg`)
        } catch (error) {
            try {
                return require(`../../Static/Images/${formattedName}.png`)
            } catch (error) {
                return placeholder
            };
        }
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
                    <p className={styles.plantName}>{ plant?.name}</p>
                    <p className={styles.scientificName}>{plant?.scientificName}</p>
                    <img className={styles.imagePlant} src={getImagePath(plant?.name)} alt={`Imagem de ${plant?.name}`}/>
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