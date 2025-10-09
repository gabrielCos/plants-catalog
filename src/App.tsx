import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Catalog from './Components/Catalog/Catalog';
import PlantSpecific from './Components/PlantSpecific/PlantSpecific';
import Sobre from './Components/Sobre/Sobre';
import UploadPlants from './Script/uploadfiles';

import getPlants from './Data/Data';
import Plant from "./Interfaces/plant"

const App: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPlants = async () => {
        const data = await getPlants();
        setPlants(data);
    };
    fetchPlants();
}, []);
  return <UploadPlants />;
  {/*return (
    <Router>
        <div className="App">
          <Header onSearch={setSearchTerm} />
          <Routes>
            <Route path='/' element={<Catalog plants={plants} searchTerm={searchTerm} />} />
            <Route path="/plant/:plantName" element={<PlantSpecific />} />
          <Route path='/sobre' element={<Sobre/>} />
          </Routes>
          <Footer />
        </div>
      
    </Router>
  );*/}
}

export default App;
