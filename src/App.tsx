import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Catalog from './Components/Catalog/Catalog';

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
