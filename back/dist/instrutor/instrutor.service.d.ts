import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { CreateExercicioDto } from 'src/exercicio/dto/create-exercicio.dto';
import { Exercicio } from 'src/exercicio/entities/exercicio.entity';
import { CreateLocalTreinamentoDto } from 'src/local-treinamento/dto/create-local-treinamento.dto';
import { LocalTreinamento } from 'src/local-treinamento/entities/local-treinamento.entity';
import { Repository } from 'typeorm';
import { CreateInstrutorDto } from './dto/create-instrutor.dto';
import { UpdateInstrutorDto } from './dto/update-instrutor.dto';
import { Instrutor } from './entities/instrutor.entity';
export declare class InstrutorService {
    private repository;
    private enderecoRepository;
    private exercicioRepository;
    private localRepository;
    constructor(repository: Repository<Instrutor>, enderecoRepository: Repository<Endereco>, exercicioRepository: Repository<Exercicio>, localRepository: Repository<LocalTreinamento>);
    create(createInstrutorDto: CreateInstrutorDto): Promise<Instrutor>;
    createExercicio(instrutor: Instrutor, exercicio: CreateExercicioDto): Promise<Instrutor>;
    createLocal(instrutor: Instrutor, local: CreateLocalTreinamentoDto): Promise<Instrutor>;
    findAll(options: IPaginationOptions, search: string): Promise<Pagination<Instrutor>>;
    findOne(id: number): Promise<Instrutor>;
    update(id: number, updateInstrutorDto: UpdateInstrutorDto): Promise<Instrutor>;
    remove(id: number): Promise<boolean>;
}
