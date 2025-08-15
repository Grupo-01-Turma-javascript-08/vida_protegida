import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ProdutoService } from "../services/produto.service";
import { Produto } from "../entities/produto.entity";
import { ManyToMany, ManyToOne } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller("/produtos")
export class ProdutoController {

    constructor(private readonly produtoService: ProdutoService){ }

    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]>{
        return this.produtoService.findAll();
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Produto[]> {
    return this.produtoService.findByNome(nome);
    }


    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto>{
        return this.produtoService.findById(id)
    }

    @Post('/cadastra')
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() produto: Produto): Promise<Produto>{
        return this.produtoService.create(produto)
    }

    @Put('/atualiza')
    @HttpCode(HttpStatus.OK)
    async update(@Body() produto: Produto): Promise<Produto>{
        return this.produtoService.update(produto)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
    return this.produtoService.delete(id);
    }


  

}