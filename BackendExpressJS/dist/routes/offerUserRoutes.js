"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const offerUserController_1 = require("../controllers/offerUserController");
const router = (0, express_1.Router)();
// Ruta para asignar una oferta a un usuario
router.post('/', offerUserController_1.addOfferToUser);
// Ruta para obtener todas las ofertas de un usuario específico
router.get('/:userId', offerUserController_1.getUserOffers);
exports.default = router;
