import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private bcrypt: Bcrypt,
  ) { }

  async findByUsuario(usuarioname: string): Promise<Usuario | undefined> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        usuario: usuarioname,
      },
    });
    return usuario === null ? undefined : usuario;
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        id,
      },
      relations: ['produtos'],
    });

    if (!usuario)
      throw new HttpException('Usuário não encontrada!', HttpStatus.NOT_FOUND);

    return usuario;
  }

  async findByTipo(tipo: string): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      where: {
        tipo: ILike(`%${tipo}%`),
      },
    });
  }

  async create(usuario: Usuario): Promise<Usuario> {
    const buscaUsuario = await this.findByUsuario(usuario.usuario);

    if (buscaUsuario) {
      throw new HttpException('Usuário já cadastrado!', HttpStatus.BAD_REQUEST);
    }

    usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha);
    return await this.usuarioRepository.save(usuario);
  }

  async update(usuario: Usuario): Promise<Usuario> {

    let usuarioUpdate: Usuario = await this.findById(usuario.id);

    if (!usuarioUpdate)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);


    let usuarioBusca = await this.findByUsuario(usuario.usuario);


    if (usuarioBusca && usuarioBusca.id !== usuario.id) {
      throw new HttpException('Usuário já existente!', HttpStatus.BAD_REQUEST);
    }
    usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha);

    return await this.usuarioRepository.save(usuario);

  }

  async delete(id: number): Promise<DeleteResult> {
    const buscaUsuario = await this.findById(id);

    if (!buscaUsuario)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

    return await this.usuarioRepository.delete(id);
  }
}
