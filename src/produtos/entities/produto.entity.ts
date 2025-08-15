import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuarios/entities/usuario.entity";

@Entity({ name: "tb_produtos" })
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nome: string;

    @Column({ length: 500 })
    descricao: string;

    @Column('decimal', { precision: 10, scale: 2 })
    preco: number;

    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;


    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
        nullable: false,
    })
    @JoinColumn({ name: 'categoriaId' })
    categoria: Categoria;

    @ManyToOne(() => Usuario, (usuario) => usuario.produtos)
    usuario: Usuario;

}