import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { Usuario } from './usuarios/entities/usuario.entity';
import { UsuarioModule } from './usuarios/usuario.module';
import { Produto } from './produtos/entities/produto.entity';
import { ProdutoModule } from './produtos/produto.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2639',
      database: 'db_vida_protegida',
      entities: [Usuario, Categoria, Produto],
      synchronize: true,
      logging: true
    }),
    UsuarioModule,
    CategoriaModule,
    ProdutoModule,
    AuthModule,
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}