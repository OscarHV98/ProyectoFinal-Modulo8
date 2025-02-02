// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import ProfessionsPage from './pages/ProfessionsPage';
import LocationsPage from './pages/LocationsPage';
import Navbar from './components/Navegation/Navbar'; // Importar Navbar
import './styles/global.css'; // Importar estilos globales
import OffersPage from './pages/OffersPage';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/professions" element={<ProfessionsPage />} />
                <Route path="/locations" element={<LocationsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
