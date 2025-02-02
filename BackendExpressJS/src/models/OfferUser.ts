import { Model } from 'sequelize';
import sequelize from '../database/database';

class OfferUser extends Model {
  public offerId!: number;
  public userId!: number;
}

OfferUser.init(
  {},
  {
    sequelize,
    modelName: 'OfferUser',
    tableName: 'offers_users',
  }
);

export default OfferUser;
