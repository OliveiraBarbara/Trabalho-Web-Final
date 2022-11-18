import { LocalTreinamento } from './entities/local-treinamento.entity';
import { CreateLocalTreinamentoDto } from './dto/create-local-treinamento.dto';
import { UpdateLocalTreinamentoDto } from './dto/update-local-treinamento.dto';
import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Endereco } from 'src/endereco/entities/endereco.entity';
export declare class LocalTreinamentoService {
    private repository;
    private enderecoRepository;
    constructor(repository: Repository<LocalTreinamento>, enderecoRepository: Repository<Endereco>);
    create(createLocalTreinamentoDto: CreateLocalTreinamentoDto): Promise<LocalTreinamento>;
    findAll(options: IPaginationOptions, search?: string): Promise<Pagination<LocalTreinamento>>;
    findOne(idLocal: number): Promise<LocalTreinamento>;
    update(idLocal: number, updateLocalTreinamentoDto: UpdateLocalTreinamentoDto): Promise<LocalTreinamento>;
    remove(idLocal: number): Promise<boolean>;
}
