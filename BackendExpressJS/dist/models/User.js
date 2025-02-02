"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
class User extends sequelize_1.Model {
}
User.init({
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true, // No permitir cadenas vacías
            len: [3, 20], // Longitud entre 3 y 20 caracteres
        },
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true, // Validar formato de email
        },
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [6, 100], // Longitud mínima de 6 caracteres
        },
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        validate: {
            isAlpha: true, // Solo permitir letras
            len: [1, 50], // Longitud máxima de 50 caracteres
        },
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        validate: {
            isAlpha: true,
            len: [1, 50],
        },
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        validate: {
            isNumeric: true, // Solo permitir números
            len: [10, 15], // Longitud entre 10 y 15 caracteres
        },
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0, 100], // Longitud máxima de 100 caracteres
        },
    },
}, {
    sequelize: database_1.default,
    modelName: "User",
    tableName: "users",
});
exports.default = User;
