"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
const User_1 = __importDefault(require("./User"));
const Profession_1 = __importDefault(require("./Profession"));
const Location_1 = __importDefault(require("./Location"));
class Offer extends sequelize_1.Model {
}
Offer.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true, // Esto permite que el ID se genere automáticamente
        primaryKey: true, // Indica que es la clave primaria
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: User_1.default,
            key: 'id',
        },
        allowNull: false,
    },
    professionId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Profession_1.default,
            key: 'id',
        },
        allowNull: false,
    },
    locationId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Location_1.default,
            key: 'id',
        },
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    modelName: 'Offer',
    tableName: 'offers',
});
exports.default = Offer;
