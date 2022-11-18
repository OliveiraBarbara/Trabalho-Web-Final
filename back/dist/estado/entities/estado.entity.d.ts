import { Cidade } from 'src/cidade/entities/cidade.entity';
import { BaseEntity } from 'src/shared/entities';
export declare class Estado extends BaseEntity {
    nome: string;
    sigla: string;
    cidades: Cidade[];
}
