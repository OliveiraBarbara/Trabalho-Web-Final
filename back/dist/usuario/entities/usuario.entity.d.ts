import { Endereco } from 'src/endereco/entities/endereco.entity';
export declare class Usuario {
    id: number;
    nome: string;
    telefone: string;
    email: string;
    senha?: string;
    role: 'cliente' | 'instrutor' | 'admin';
    enderecos?: Endereco[];
    hashPassword(): void;
}
