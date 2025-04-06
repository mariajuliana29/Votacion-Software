import { IsNumber } from "class-validator";
export class CreateCandidatoDto {

    @IsNumber()
    documento_i: number;

    @IsNumber()
    id_usuario: number; 

    @IsNumber()
    noTargeton: number;
    
    @IsNumber()
    id_tipo_candidato: number;

}

