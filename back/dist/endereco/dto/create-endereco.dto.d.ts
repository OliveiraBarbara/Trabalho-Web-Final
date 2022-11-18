import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
export declare class CreateEnderecoDto {
    rua: string;
    num: number;
    complemento?: string;
    bairro: string;
    cep: string;
    cidade: RelationEntityDto;
}
