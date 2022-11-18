import { LocalTreinamento } from './../../local-treinamento/entities/local-treinamento.entity';
import { Exercicio } from './../../exercicio/entities/exercicio.entity';
import { CreateUsuarioDto } from './../../usuario/dto/create-usuario.dto';
export declare class CreateInstrutorDto extends CreateUsuarioDto {
    cref: number;
    modalidade: string;
    exercicios?: Exercicio[];
    academias?: LocalTreinamento[];
}
