import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
import { Exercicio } from './../../exercicio/entities/exercicio.entity';
export declare class CreatePreferenciaExercicioDto {
    intensidade: string;
    qtdnaSemana: string;
    exercicio: Exercicio;
    preferencia: Preferencia;
}
