import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produtos/entities/produto.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "tb_usuarios" })
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    usuario: string;

    @ApiProperty()
    @Column()
    idade: number;

    @MinLength(8)
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    senha: string;



    @Column({ length: 5000 })
    @ApiProperty()
    foto: string;

    @Column({ length: 255 })
    @ApiProperty()
    tipo: string;

    @OneToMany(() => Produto, (produto) => produto.usuario, {
        onDelete: 'CASCADE',
    })
    produtos: Produto[];

}
