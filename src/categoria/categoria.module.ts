import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./service/categoria.service";
import { CategoriaController } from "./controllers/categoria.controller";
import { Produto } from "../produtos/entities/produto.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Categoria, Produto])],
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports: []
})
export class CategoriaModule {}