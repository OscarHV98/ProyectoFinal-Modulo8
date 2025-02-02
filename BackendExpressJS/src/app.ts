//app.ts
import express from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors'; 
import userRoutes from './routes/userRoutes';
import offerRoutes from './routes/offerRoutes';
import offerUserRoutes from './routes/offerUserRoutes';
import locationRoutes from './routes/locationRoutes';
import professionRoutes from './routes/professionRoutes';

const app = express();

// Configurar CORS para aceptar múltiples orígenes
const allowedOrigins = ['http://localhost:5173', 'http://localhost:8383', 'http://172.21.0.4:8383'];

// Configurar CORS
// app.use(cors({
//     origin: 'http://localhost:5173', // Cambia esto a la URL de tu frontend si es diferente
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
//     allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
//   }));

app.use(cors({
  origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
      } else {
          callback(new Error('No permitido por CORS'));
      }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// app.use(bodyParser.json());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/offers', offerRoutes);
app.use('/api/professions', professionRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/offer-users', offerUserRoutes);

export default app;
