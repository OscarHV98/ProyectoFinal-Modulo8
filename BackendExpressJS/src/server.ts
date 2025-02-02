// server.ts 
import http from 'http';
import WebSocket from 'ws';
import dotenv from 'dotenv';
import app from './app';
import sequelize from './database/database';
import { setWebSocketServer } from './controllers/offerController';

dotenv.config();


const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
setWebSocketServer(wss);

wss.on('connection', (ws) => {
  console.log('Cliente conectado');
  ws.on('close', () => console.log('Cliente desconectado'));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, async () => {
  try {
    await sequelize.sync();
    // await sequelize.sync({ alter: true }); // Modificación automática de tablas

    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
});
