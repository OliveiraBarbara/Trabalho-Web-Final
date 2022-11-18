import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
export declare class Cliente extends Usuario {
    cpf: string;
    preferencias?: Preferencia[];
}
