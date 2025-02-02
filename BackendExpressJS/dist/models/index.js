"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferUser = exports.Offer = exports.Location = exports.Profession = exports.User = exports.sequelize = void 0;
const database_1 = __importDefault(require("../database/database"));
exports.sequelize = database_1.default;
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const Offer_1 = __importDefault(require("./Offer"));
exports.Offer = Offer_1.default;
const Profession_1 = __importDefault(require("./Profession"));
exports.Profession = Profession_1.default;
const Location_1 = __importDefault(require("./Location"));
exports.Location = Location_1.default;
const OfferUser_1 = __importDefault(require("./OfferUser"));
exports.OfferUser = OfferUser_1.default;
// Definir relaciones después de importar todos los modelos
// Relación uno-a-muchos entre User y Offer
User_1.default.hasMany(Offer_1.default, { foreignKey: 'userId' });
Offer_1.default.belongsTo(User_1.default, { foreignKey: 'userId' });
// Relación uno-a-muchos entre Offer y Profession
Offer_1.default.belongsTo(Profession_1.default, { foreignKey: 'professionId' });
Profession_1.default.hasMany(Offer_1.default, { foreignKey: 'professionId' });
// Relación uno-a-muchos entre Offer y Location
Offer_1.default.belongsTo(Location_1.default, { foreignKey: 'locationId' });
Location_1.default.hasMany(Offer_1.default, { foreignKey: 'locationId' });
// Relación muchos-a-muchos entre User y Offer a través de OfferUser
User_1.default.belongsToMany(Offer_1.default, { through: OfferUser_1.default, foreignKey: 'userId' });
Offer_1.default.belongsToMany(User_1.default, { through: OfferUser_1.default, foreignKey: 'offerId' });
