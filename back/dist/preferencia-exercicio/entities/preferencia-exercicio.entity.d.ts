import { Exercicio } from './../../exercicio/entities/exercicio.entity';
import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
import { BaseEntity } from 'typeorm';
export declare class PreferenciaExercicio extends BaseEntity {
    idPE: number;
    preferencia: Preferencia;
    exercicio: Exercicio;
    intensidade: string;
    qtdnaSemana: string;
}
