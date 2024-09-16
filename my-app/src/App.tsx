import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/MainContent';
import AutoDiagnostico from './components//AutoDiagnostico';
import Sobre from './components/Sobre';
import Perfil from './components/Perfil';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnostico" element={<AutoDiagnostico />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;