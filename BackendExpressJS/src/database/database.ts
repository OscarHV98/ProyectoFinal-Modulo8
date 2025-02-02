import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dataBase_Postgres = process.env.PG_URI;

const sequelize = new Sequelize(dataBase_Postgres || '', {
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
