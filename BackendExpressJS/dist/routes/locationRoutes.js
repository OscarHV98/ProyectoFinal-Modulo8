"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const locationController_1 = require("../controllers/locationController");
const router = (0, express_1.Router)();
router.post('/', locationController_1.createLocation);
router.get('/', locationController_1.getAllLocations);
exports.default = router;
