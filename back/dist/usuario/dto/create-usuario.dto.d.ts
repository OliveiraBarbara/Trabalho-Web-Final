import { Endereco } from '../../endereco/entities/endereco.entity';
export declare class CreateUsuarioDto {
    nome: string;
    telefone: string;
    email: string;
    senha: string;
    enderecos?: Endereco[];
}
