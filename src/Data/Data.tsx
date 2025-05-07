import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

import Plant from "../Interfaces/plant";

const getPlants = async (): Promise<Plant[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "plants"));
    const plantsList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Plant[];
    return plantsList;
  } catch (error) {
    console.error("Erro ao buscar plantas:", error)
    return [];
  }
}

/* const dummyDate: plant[] = [
   {
      name: "Chambá",
      scientificName: "Justicia pectoralis",
      symthoms: ["Crises de asma", "Tosse", "Bronquite", "Chiado no peito"],
      prepareMode: "Chá",
      partUsed: "Planta",
      Ingridients: ["1 copo de água fervida ou filtrada", "1 xíxara e meia de folhas de chambá (bem lavadas e cortadas em pedaços)"],
      HowToDo: ["Cozinhe as folhas até que exalem um aroma parecido com o do cumaru.", "Em seguida, coe as folhas e reserve o chá em um recipiente."],
      useRecomendation: "Consumir o chá 2x ao dia e manter o tratamento durante 1 semana",
      contraindication: ["Crianças menores de 6 anos, Gestantes, Lactantes.", "Não deve ser usada conjuntamente com anticoagulantes ou em pacientes com transtornos circulatórios"]
    },
    {
      name: "Boldo",
      scientificName: "Peumus boldus",
      symthoms: ["Intolerância alimentar", "Bactérias", "Anti oxidante", "Calmante"],
      prepareMode: "Chá",
      partUsed: "Planta",
      Ingridients: ["1 copo de água fervida ou filtrada", "1 xíxara e meia de folhas de chambá (bem lavadas e cortadas em pedaços)"],
      HowToDo: ["Cozinhe as folhas até que exalem um aroma parecido com o do cumaru.", "Em seguida, coe as folhas e reserve o chá em um recipiente."],
      useRecomendation: "Consumir o chá 2x ao dia e manter o tratamento durante 1 semana",
      contraindication: ["Crianças menores de 6 anos, Gestantes, Lactantes.", "Não deve ser usada conjuntamente com anticoagulantes ou em pacientes com transtornos circulatórios"]
    },
    {
      name: "Arruda",
      scientificName: "Ruta graveolens",
      symthoms: ["Combater sarnas ou piolhos", "Aliviar dores", "Bronquite", "Chiado no peito"],
      prepareMode: "Chá",
      partUsed: "Planta",
      Ingridients: ["1 copo de água fervida ou filtrada", "1 xíxara e meia de folhas de chambá (bem lavadas e cortadas em pedaços)"],
      HowToDo: ["Cozinhe as folhas até que exalem um aroma parecido com o do cumaru.", "Em seguida, coe as folhas e reserve o chá em um recipiente."],
      useRecomendation: "Consumir o chá 2x ao dia e manter o tratamento durante 1 semana",
      contraindication: ["Crianças menores de 6 anos, Gestantes, Lactantes.", "Não deve ser usada conjuntamente com anticoagulantes ou em pacientes com transtornos circulatórios"]
    },
    {
      name: "Gengibre",
      scientificName: "Zingiber officinale",
      symthoms: ["Nauseas", "Vômitos", "indigestão", "Gripes"],
      prepareMode: "Chá",
      partUsed: "Planta",
      Ingridients: ["1 copo de água fervida ou filtrada", "1 xíxara e meia de folhas de chambá (bem lavadas e cortadas em pedaços)"],
      HowToDo: ["Cozinhe as folhas até que exalem um aroma parecido com o do cumaru.", "Em seguida, coe as folhas e reserve o chá em um recipiente."],
      useRecomendation: "Consumir o chá 2x ao dia e manter o tratamento durante 1 semana",
      contraindication: ["Crianças menores de 6 anos, Gestantes, Lactantes.", "Não deve ser usada conjuntamente com anticoagulantes ou em pacientes com transtornos circulatórios"]
  },
  {
    name: "Alecrim",
    scientificName: "Salvia rosmarinus",
    symthoms: ["Dores de cabeça", "Cansaço", "Digestão", "Pressão arterial"],
    prepareMode: "Chá",
    partUsed: "Planta",
    Ingridients: ["1 copo de água fervida ou filtrada", "1 xíxara e meia de folhas de chambá (bem lavadas e cortadas em pedaços)"],
    HowToDo: ["Cozinhe as folhas até que exalem um aroma parecido com o do cumaru.", "Em seguida, coe as folhas e reserve o chá em um recipiente."],
    useRecomendation: "Consumir o chá 2x ao dia e manter o tratamento durante 1 semana",
    contraindication: ["Crianças menores de 6 anos, Gestantes, Lactantes.", "Não deve ser usada conjuntamente com anticoagulantes ou em pacientes com transtornos circulatórios"]
  },
  {
    name: "Camomila",
    scientificName: "Justicia pectoralis",
    symthoms: ["Inflamações", "Insônia", "Ansiedade", "Depressão"],
    prepareMode: "Chá",
    partUsed: "Planta",
    Ingridients: ["1 copo de água fervida ou filtrada", "1 xíxara e meia de folhas de chambá (bem lavadas e cortadas em pedaços)"],
    HowToDo: ["Cozinhe as folhas até que exalem um aroma parecido com o do cumaru.", "Em seguida, coe as folhas e reserve o chá em um recipiente."],
    useRecomendation: "Consumir o chá 2x ao dia e manter o tratamento durante 1 semana",
    contraindication: ["Crianças menores de 6 anos, Gestantes, Lactantes.", "Não deve ser usada conjuntamente com anticoagulantes ou em pacientes com transtornos circulatórios"]
  },
  {
    name: "Hortelã",
    scientificName: "Mentha spicata",
    symthoms: ["Inflamações", "Digestão", "Gripe", "Dor de Cabeça"],
    prepareMode: "Chá",
    partUsed: "Planta",
    Ingridients: ["1 copo de água fervida ou filtrada", "1 xíxara e meia de folhas de chambá (bem lavadas e cortadas em pedaços)"],
    HowToDo: ["Cozinhe as folhas até que exalem um aroma parecido com o do cumaru.", "Em seguida, coe as folhas e reserve o chá em um recipiente."],
    useRecomendation: "Consumir o chá 2x ao dia e manter o tratamento durante 1 semana",
    contraindication: ["Crianças menores de 6 anos, Gestantes, Lactantes.", "Não deve ser usada conjuntamente com anticoagulantes ou em pacientes com transtornos circulatórios"]
  },
    
];*/
  
export default getPlants;