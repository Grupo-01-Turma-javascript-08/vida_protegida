import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nome: string;
    

    @Column({ length: 500})
    descricao: string;

    @Column('decimal', { precision: 10, scale: 2 })
    preco: number;

    @Column({ default: 0 })
    estoque: number;

    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;

    


}