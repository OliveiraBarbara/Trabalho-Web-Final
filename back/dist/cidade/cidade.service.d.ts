import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { Cidade } from './entities/cidade.entity';
export declare class CidadeService {
    private repository;
    constructor(repository: Repository<Cidade>);
    create(createCidadeDto: CreateCidadeDto): Promise<Cidade>;
    findAll(options: IPaginationOptions, search?: string): Promise<Pagination<Cidade>>;
    findOne(id: number): Promise<Cidade>;
    update(id: number, updateCidadeDto: UpdateCidadeDto): Promise<Cidade>;
    remove(id: number): Promise<boolean>;
}
