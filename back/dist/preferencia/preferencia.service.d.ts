import { Preferencia } from './entities/preferencia.entity';
import { CreatePreferenciaDto } from './dto/create-preferencia.dto';
import { UpdatePreferenciaDto } from './dto/update-preferencia.dto';
import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
export declare class PreferenciaService {
    private repository;
    constructor(repository: Repository<Preferencia>);
    create(createPreferenciaDto: CreatePreferenciaDto): Promise<Preferencia>;
    findAll(options: IPaginationOptions, search?: string): Promise<Pagination<Preferencia>>;
    findOne(idPref: number): Promise<Preferencia>;
    update(idPref: number, updatePreferenciaDto: UpdatePreferenciaDto): Promise<Preferencia>;
    remove(idPref: number): Promise<boolean>;
}
