import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { Estado } from './entities/estado.entity';
export declare class EstadoService {
    private repository;
    constructor(repository: Repository<Estado>);
    create(createEstadoDto: CreateEstadoDto): Promise<Estado>;
    findAll(options: IPaginationOptions, search?: string): Promise<Pagination<Estado>>;
    findOne(id: number): Promise<Estado>;
    update(id: number, updateEstadoDto: UpdateEstadoDto): Promise<Estado>;
    remove(id: number): Promise<boolean>;
}
