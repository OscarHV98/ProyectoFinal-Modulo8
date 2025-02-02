import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

class Profession extends Model {
  public id!: number;
  public name!: string;
}

Profession.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Profession',
    tableName: 'professions',
  }
);

export default Profession;
