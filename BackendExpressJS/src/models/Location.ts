import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

class Location extends Model {
  public id!: number;
  public name!: string;
}

Location.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Location',
    tableName: 'locations',
  }
);

export default Location;
