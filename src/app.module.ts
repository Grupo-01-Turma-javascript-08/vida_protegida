import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { UsuarioModule } from './usuarios/usuario.module';
import { ProdutoModule } from './produtos/produto.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ProdService } from './data/service/prod.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
    UsuarioModule,
    CategoriaModule,
    ProdutoModule,
    AuthModule,

  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }