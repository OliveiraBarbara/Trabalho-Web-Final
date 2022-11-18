import { CreatePreferenciaDto } from './../preferencia/dto/create-preferencia.dto';
import { Preferencia } from 'src/preferencia/entities/preferencia.entity';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
export declare class ClienteService {
    private repository;
    private enderecoRepository;
    private preferenciaRepository;
    constructor(repository: Repository<Cliente>, enderecoRepository: Repository<Endereco>, preferenciaRepository: Repository<Preferencia>);
    create(createClienteDto: CreateClienteDto): Promise<Cliente>;
    createPref(cliente: Cliente, preferencia: CreatePreferenciaDto): Promise<Cliente>;
    findAll(options: IPaginationOptions, search: string): Promise<Pagination<Cliente>>;
    findOne(id: number): Promise<Cliente>;
    update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente>;
    remove(id: number): Promise<boolean>;
}
