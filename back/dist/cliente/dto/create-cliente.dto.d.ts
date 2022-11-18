import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
import { CreateUsuarioDto } from './../../usuario/dto/create-usuario.dto';
export declare class CreateClienteDto extends CreateUsuarioDto {
    cpf: string;
    preferencias?: Preferencia[];
}
