import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; 
import '../../styles/Navbar.css'; 

const Navbar: React.FC = () => {
  const theme = useTheme(); 
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };

  const menuItems = [
    { text: 'Inicio', to: '/' },
    { text: 'Usuarios', to: '/users' },
    { text: 'Ofertas', to: '/offers' },
    { text: 'Profesiones', to: '/professions' },
    { text: 'Ubicaciones', to: '/locations' },
  ];

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} className="navbar-title">
          Búsqueda de Empleo
        </Typography>

        {isMobile ? (
          // Para móvil, mostrar el ícono de menú que abre un Drawer
          <>
            <IconButton edge="end" color="inherit" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            {/* Drawer con el menú */}
            <Drawer anchor="right" open={openDrawer} onClose={() => toggleDrawer(false)}>
              <List sx={{ width: 250 }}>
                {menuItems.map((item) => (
                  <ListItemButton key={item.text} onClick={() => toggleDrawer(false)} className="drawer-item">
                    <ListItemText>
                      <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {item.text}
                      </Link>
                    </ListItemText>
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          // Para escritorio, mostrar botones de navegación
          <>
            {menuItems.map((item) => (
              <Button key={item.text} color="inherit" component={Link} to={item.to} className="navbar-btn">
                {item.text}
              </Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
