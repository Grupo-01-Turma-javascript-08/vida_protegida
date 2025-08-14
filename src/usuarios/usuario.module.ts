import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from './controllers/usuario.controller';
import { Produto } from '../produtos/entities/produto.entity';
import { ProdutoModule } from '../produtos/produto.module';
import { BcryptModule } from '../auth/bcrypt/bcrypt.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario, Produto]),
  forwardRef(() => ProdutoModule),
  BcryptModule
  ],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}
