import { Estado } from 'src/estado/entities/estado.entity';
import { BaseEntity } from 'src/shared/entities';
export declare class Cidade extends BaseEntity {
    nome: string;
    estado: Estado;
}
