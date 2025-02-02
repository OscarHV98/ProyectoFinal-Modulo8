import { Model, DataTypes } from "sequelize";
import sequelize from "../database/database";

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public name!: string;
  public last_name!: string;
  public phone!: string;
  public address!: string;
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // No permitir cadenas vacías
        len: [3, 20], // Longitud entre 3 y 20 caracteres
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validar formato de email
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [6, 100], // Longitud mínima de 6 caracteres
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlpha: true, // Solo permitir letras
        len: [1, 50], // Longitud máxima de 50 caracteres
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlpha: true,
        len: [1, 50],
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isNumeric: true, // Solo permitir números
        len: [10, 15], // Longitud entre 10 y 15 caracteres
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 100], // Longitud máxima de 100 caracteres
      },
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);

export default User;

