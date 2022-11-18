import { Endereco } from 'src/endereco/entities/endereco.entity';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
export declare class EnderecoService {
    private repository;
    constructor(repository: Repository<Endereco>);
    create(createEnderecoDto: CreateEnderecoDto): Promise<Endereco>;
    findAll(options: IPaginationOptions, search?: string): Promise<Pagination<Endereco>>;
    findOne(id: number): Promise<Endereco>;
    update(id: number, updateEnderecoDto: UpdateEnderecoDto): string;
    remove(id: number): Promise<boolean>;
}
