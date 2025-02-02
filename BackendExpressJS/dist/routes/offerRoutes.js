"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const offerController_1 = require("../controllers/offerController");
const router = (0, express_1.Router)();
router.post('/', offerController_1.createOffer);
router.get('/', offerController_1.getAllOffers);
exports.default = router;
