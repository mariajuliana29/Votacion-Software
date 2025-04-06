import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUsuarioDto {
  
    @IsNumber()
    id_usuario: number; 

    @IsNotEmpty()
    nombre : string  

    @IsString()
    apellido : string  

    @IsNumber()
    documento_i: number  

    @IsEmail()
    email : string
    
    @IsNotEmpty()
    foto: URL

    @IsNumber()
    clave : number

    @IsNumber()
    id_rol : number

    @IsString()
    curso : string  

}
