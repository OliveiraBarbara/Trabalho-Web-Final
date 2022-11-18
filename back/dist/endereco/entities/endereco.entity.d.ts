import { Cidade } from 'src/cidade/entities/cidade.entity';
import { BaseEntity } from 'src/shared/entities';
export declare class Endereco extends BaseEntity {
    rua: string;
    num: number;
    complemento?: string;
    bairro: string;
    cep: string;
    cidade: Cidade;
}
