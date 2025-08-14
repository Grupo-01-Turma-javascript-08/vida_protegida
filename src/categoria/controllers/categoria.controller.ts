import { Controller, Get, Param, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { Categoria } from '../entities/categoria.entity';
import { CategoriaService } from '../service/categoria.service';


@Controller("/categorias")
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }
    
    @Get('/:id')
@HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
  return this.categoriaService.findById(id);
}

@Get('/descricao/:descricao')
@HttpCode(HttpStatus.OK)
findByAllCategoria(@Param('descricao') descricao: string): Promise<Categoria[]> {
    return this.categoriaService.findAllByDescricao(descricao);
}

}

