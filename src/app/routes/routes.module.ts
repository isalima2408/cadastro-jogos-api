import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JogosController } from './jogos/jogos.controller';
import { UserController } from './user/user.controller';
import { JogosService } from './jogos/jogos.service';
import { UserService } from './user/user.service';
import { Jogo } from '../../database/entities/jogo.entity'
import { User } from 'src/database/entities/user.entity';

@Module({
    imports: [SequelizeModule.forFeature([Jogo, User])],
    controllers: [JogosController, UserController],
    providers: [JogosService, UserService],
})
export class RoutesModule {}
