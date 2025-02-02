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
exports.getAllOffers = exports.createOffer = exports.setWebSocketServer = void 0;
const Offer_1 = __importDefault(require("../models/Offer"));
const ws_1 = __importDefault(require("ws"));
let wss;
const setWebSocketServer = (wsServer) => {
    wss = wsServer;
};
exports.setWebSocketServer = setWebSocketServer;
const createOffer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const offer = yield Offer_1.default.create(req.body);
        wss.clients.forEach((client) => {
            if (client.readyState === ws_1.default.OPEN) {
                client.send(JSON.stringify(offer));
            }
        });
        res.status(201).json(offer);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createOffer = createOffer;
const getAllOffers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const offers = yield Offer_1.default.findAll();
        res.json(offers);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllOffers = getAllOffers;
