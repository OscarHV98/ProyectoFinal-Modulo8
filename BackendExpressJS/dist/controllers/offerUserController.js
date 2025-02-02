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
exports.getUserOffers = exports.addOfferToUser = void 0;
const OfferUser_1 = __importDefault(require("../models/OfferUser"));
const Offer_1 = __importDefault(require("../models/Offer"));
const User_1 = __importDefault(require("../models/User"));
const addOfferToUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, offerId } = req.body;
        const offerUser = yield OfferUser_1.default.create({ userId, offerId });
        res.status(201).json(offerUser);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.addOfferToUser = addOfferToUser;
const getUserOffers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const offers = yield Offer_1.default.findAll({
            include: {
                model: User_1.default,
                where: { id: userId },
                through: { attributes: [] }, // Ocultar atributos de la tabla intermedia
            },
        });
        res.json(offers);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getUserOffers = getUserOffers;
