import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion'; // Reemplazo de react-motion por framer-motion
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="page-container">
      <Container maxWidth="md">
        <motion.div
          className="intro-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" align="center" className="home-title">
            Encuentra tu empleo ideal
          </Typography>
          <Typography variant="h6" align="center" className="home-subtitle">
            Conéctate con las mejores ofertas laborales a tu alcance
          </Typography>
        </motion.div>

        <motion.div
          className="action-buttons"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Box textAlign="center">
            {/* Envolver el botón con un Link */}
            <Link to="/offers" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" size="large" className="explore-btn">
                Explorar Ofertas
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
};

export default HomePage;
