import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

@Entity({ name: "tb_produtos" })
export class Produto {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ length: 100 })
    nome: string;

    @ApiProperty()
    @Column({ length: 500 })
    descricao: string;

    @ApiProperty()
    @Column('decimal', { precision: 10, scale: 2 })
    preco: number;

    @CreateDateColumn()
    criadoEm: Date;

    @ApiProperty()  
    @UpdateDateColumn()
    atualizadoEm: Date;


    @ApiProperty({ type: () => Categoria })
    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
        nullable: false,
    })
    @JoinColumn({ name: 'categoriaId' })
    categoria: Categoria;

    @ApiProperty({ type: () => Usuario })
    @ManyToOne(() => Usuario, (usuario) => usuario.produtos)
    usuario: Usuario;

}