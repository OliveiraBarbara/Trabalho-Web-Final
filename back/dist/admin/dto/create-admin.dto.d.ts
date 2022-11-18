import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';
export declare class CreateAdminDto extends CreateUsuarioDto {
    numReg: number;
    cargo: string;
    formacao: string;
    horaTrabalho: string;
}
