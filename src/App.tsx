import React, {useState} from 'react';

import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Catalog from './Components/Catalog/Catalog';
import PlantSpecific from './Components/PlantSpecific/PlantSpecific';

import plant from './Interfaces/plant';


const dummyDate: plant[] = [
  {
    name: "Chambá (Anador, Trevo-Cumaru)",
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
    name: "Arruda",
    scientificName: "Justicia pectoralis",
    symthoms: ["Crises de asma", "Sangramento", "Bronquite", "Chiado no peito"],
    prepareMode: "Chá",
    partUsed: "Planta",
    Ingridients: ["1 copo de água fervida ou filtrada", "1 xíxara e meia de folhas de chambá (bem lavadas e cortadas em pedaços)"],
    HowToDo: ["Cozinhe as folhas até que exalem um aroma parecido com o do cumaru.", "Em seguida, coe as folhas e reserve o chá em um recipiente."],
    useRecomendation: "Consumir o chá 2x ao dia e manter o tratamento durante 1 semana",
    contraindication: ["Crianças menores de 6 anos, Gestantes, Lactantes.", "Não deve ser usada conjuntamente com anticoagulantes ou em pacientes com transtornos circulatórios"]
  }
];

function App() {
  const [plants, setPlants] = useState([dummyDate]);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Header onSearch={setSearchTerm} />
      <Catalog plants={dummyDate} searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
