import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

export const databaseProviders: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'gerenciamentoJogos',
  models: [__dirname + '/entities']
}
