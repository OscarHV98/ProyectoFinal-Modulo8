"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesionsController_1 = require("../controllers/profesionsController");
const router = (0, express_1.Router)();
router.post('/', profesionsController_1.createProfession);
router.get('/', profesionsController_1.getAllProfessions);
exports.default = router;
