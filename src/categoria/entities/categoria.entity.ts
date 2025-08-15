import { IsNotEmpty } from "class-validator"
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Produto } from "../../produtos/entities/produto.entity"
import { ApiProperty } from "@nestjs/swagger"

@Entity({ name: "tb_categoria" })
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    @ApiProperty()
    descricao: string;
    
    @ApiProperty()
    @OneToMany(() => Produto, (produto) => produto.categoria, {
        onDelete: 'CASCADE',
    })
    produtos: Produto[];

}