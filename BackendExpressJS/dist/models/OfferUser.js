"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
class OfferUser extends sequelize_1.Model {
}
OfferUser.init({}, {
    sequelize: database_1.default,
    modelName: 'OfferUser',
    tableName: 'offers_users',
});
exports.default = OfferUser;
