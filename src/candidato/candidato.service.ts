import { Injectable } from '@nestjs/common';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class CandidatoService {
  constructor(private readonly usuario: UsuarioService) {}
  candidatos = []

    create(createCandidatoDto: CreateCandidatoDto) {
      console.log('Intentando crear candidato:',createCandidatoDto);
      let resp= this.usuario.findOne(createCandidatoDto.id_usuario);
      console.log('Respuesta:',resp);
    if(resp != undefined){
      if(this.findOne(createCandidatoDto.id_usuario) == undefined){
        let noTargeton = this.candidatos.length + 1;
        createCandidatoDto.noTargeton = noTargeton;
        this.candidatos.push(createCandidatoDto);
        console.log('Candidato creado:', createCandidatoDto);
        return "Candidato creado con exito";
      }
      else{
        return "Candidato ya existe";
      }
    }else {
        return "Usuario no encontrado";
      }
    
  }

  findAll() {
      return this.candidatos;
  }

  findOne(id: number) {
    return this.candidatos.find(candidato => candidato.id_usuario === id);
  }

  update(id: number, updateCandidatoDto: UpdateCandidatoDto) {
    const candidatoIndex = this.candidatos.findIndex(candidato => candidato.id_usuario === id);
    if (candidatoIndex > -1) {
      this.candidatos[candidatoIndex] = { ...this.candidatos[candidatoIndex], ...updateCandidatoDto };
      return `Candidato #${id} actualizado con exito`;
    } else {
      return `Candidato #${id} no encontrado`;
    }
  }

  remove(id: number) {
    const candidatoIndex = this.candidatos.findIndex(candidato => candidato.id_usuario === id);
    if (candidatoIndex > -1) {
      this.candidatos.splice(candidatoIndex, 1);
      return `Candidato #${id} eliminado con exito`;
    } else {
      return `Candidato #${id} no encontrado`;
    }
  }
}
