import { LocalTreinamento } from './local-treinamento.model';
import { Exercicio } from './exercicio.model';
import { Endereco } from './endereco.model';

export interface Instrutor {
  id: number;
  cref: string;
  nome: string;
  telefone: string;
  modalidade: string;
  email: string;
  senha: string;
  enderecos: Endereco[];
  exercicios: Exercicio[];
  academias: LocalTreinamento[];
}
