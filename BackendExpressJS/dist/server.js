"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts 
const http_1 = __importDefault(require("http"));
const ws_1 = __importDefault(require("ws"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database/database"));
const offerController_1 = require("./controllers/offerController");
dotenv_1.default.config();
const server = http_1.default.createServer(app_1.default);
const wss = new ws_1.default.Server({ server });
(0, offerController_1.setWebSocketServer)(wss);
wss.on('connection', (ws) => {
    console.log('Cliente conectado');
    ws.on('close', () => console.log('Cliente desconectado'));
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await sequelize.sync();
        yield database_1.default.sync({ alter: true }); // Modificación automática de tablas
        console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    }
    catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}));
