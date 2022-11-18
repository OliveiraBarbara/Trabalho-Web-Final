import { LocalTreinamento } from './../../local-treinamento/entities/local-treinamento.entity';
import { Exercicio } from './../../exercicio/entities/exercicio.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
export declare class Instrutor extends Usuario {
    cref: number;
    modalidade: string;
    exercicios?: Exercicio[];
    academias?: LocalTreinamento[];
}
