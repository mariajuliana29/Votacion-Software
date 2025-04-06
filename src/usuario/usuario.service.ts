import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  personas = [{ id_usuario: 1, documento_i: 123456 }]
  create(createUsuarioDto: CreateUsuarioDto) {
    this.personas.push(createUsuarioDto)
    return 'Usuario creado con exito....';
  }

  findAll() {
    return this.personas;
  }

  findOne(id: number) {
    return this.personas.find(item => item.id_usuario == id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioIndex = this.personas.findIndex(item => item.id_usuario == id);
    if (usuarioIndex == -1) {
      return `Usuario con id #${id} no encontrado`;
    }
    this.personas[usuarioIndex] = { ...this.personas[usuarioIndex], ...updateUsuarioDto };
    return this.personas[usuarioIndex];
  }

  remove(id: number) {
    const usuarioIndex = this.personas.findIndex(item => item.id_usuario === id);
    if (usuarioIndex === -1) {
      return `Usuario con id #${id} no encontrado`;
    }
    this.personas.splice(usuarioIndex, 1);
    return `Usuario con id #${id} eliminado con éxito`;
  }
}
