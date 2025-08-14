import { IsNotEmpty } from "class-validator"
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Produto } from "../../produtos/entities/produto.entity"

@Entity({name: "tb_categoria"})
export class Categoria {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    descricao: string

    @OneToMany(() => Produto, (produto) => produto.categoria, {
        onDelete: 'CASCADE',
    })
    produtos: Produto[];

}