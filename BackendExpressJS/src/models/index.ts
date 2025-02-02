import sequelize from '../database/database';
import User from './User';
import Offer from './Offer';
import Profession from './Profession';
import Location from './Location';
import OfferUser from './OfferUser';

// Relación uno-a-muchos entre User y Offer
User.hasMany(Offer, { foreignKey: 'userId' });
Offer.belongsTo(User, { foreignKey: 'userId' });

// Relación uno-a-muchos entre Offer y Profession
Profession.hasMany(Offer, { foreignKey: 'professionId' });
Offer.belongsTo(Profession, { foreignKey: 'professionId' });

// Relación uno-a-muchos entre Offer y Location
Location.hasMany(Offer, { foreignKey: 'locationId' });
Offer.belongsTo(Location, { foreignKey: 'locationId' });


// Relación muchos-a-muchos entre User y Offer a través de OfferUser
User.belongsToMany(Offer, { through: OfferUser, foreignKey: 'userId' });
Offer.belongsToMany(User, { through: OfferUser, foreignKey: 'offerId' });

export { sequelize, User, Profession, Location, Offer, OfferUser };