import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';
import User from './User';
import Profession from './Profession';
import Location from './Location';

class Offer extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public price!: number;
    public userId!: number;          // ID de usuario (relación con User)
    public professionId!: number;    // ID de profesión (relación con Profession)
    public locationId!: number;      // ID de ubicación (relación con Location)
  }

  Offer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // Esto permite que el ID se genere automáticamente
        primaryKey: true, // Indica que es la clave primaria
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id',
        },
        allowNull: false,
      },
      professionId: {
        type: DataTypes.INTEGER,
        references: {
          model: Profession,
          key: 'id',
        },
        allowNull: false,
      },
      locationId: {
        type: DataTypes.INTEGER,
        references: {
          model: Location,
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Offer',
      tableName: 'offers',
    }
  );

export default Offer;
