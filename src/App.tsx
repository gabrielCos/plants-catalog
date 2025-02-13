import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Catalog from './Components/Catalog/Catalog';
import PlantSpecific from './Components/PlantSpecific/PlantSpecific';

import dummyDate from './Data/Data';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
        <div className="App">
          <Header onSearch={setSearchTerm} />
          <Routes>
            <Route path='/' element={<Catalog plants={dummyDate} searchTerm={searchTerm} />} />
            <Route path="/plant/:plantName" element={<PlantSpecific />} />
          </Routes>
          <Footer />
        </div>
      
    </Router>
  );
}

export default App;
