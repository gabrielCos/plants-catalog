import React, {useState} from 'react';

import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Catalog from './Components/Catalog/Catalog';
import PlantSpecific from './Components/PlantSpecific/PlantSpecific';

import plant from './Interfaces/plant';


const dummyDate: plant[] = [
  {
    name: "chambá", scientificName: "Justicia pectoralis", symthons: ["bronquite", "tosse", "Crises de Asma", "Chiado no Peito"],
    prepareMode: "chá", partUsed: "folhas", howToPrepare: ["1 copo de água fervida ou filtrada", "1 xíxara e meia de folhas de chambá (bem lavadas e cortadas em pedaços)"],
    useRecomendation: "Consumir o chá 2x ao dia e manter o tratamento durante 1 semana",
    contraindication: "Crianças menores de 6 anos, Gestantes, Lactantes"
  }
];

function App() {
  const [plants, setPlants] = useState([dummyDate]);

  return (
    <div className="App">
      <Header />
      <PlantSpecific />
      <Footer />
    </div>
  );
}

export default App;
