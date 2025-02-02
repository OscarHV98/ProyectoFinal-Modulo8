"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//app.ts
const express_1 = __importDefault(require("express"));
// import bodyParser from 'body-parser';
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const offerRoutes_1 = __importDefault(require("./routes/offerRoutes"));
const offerUserRoutes_1 = __importDefault(require("./routes/offerUserRoutes"));
const locationRoutes_1 = __importDefault(require("./routes/locationRoutes"));
const professionRoutes_1 = __importDefault(require("./routes/professionRoutes"));
const app = (0, express_1.default)();
// Configurar CORS
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173', // Cambia esto a la URL de tu frontend si es diferente
    methods: ['GET', 'POST', 'Put', 'Delete'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));
// app.use(bodyParser.json());
app.use(express_1.default.json());
app.use('/api/users', userRoutes_1.default);
app.use('/api/offers', offerRoutes_1.default);
app.use('/api/professions', professionRoutes_1.default);
app.use('/api/locations', locationRoutes_1.default);
app.use('/api/offer-users', offerUserRoutes_1.default);
exports.default = app;
