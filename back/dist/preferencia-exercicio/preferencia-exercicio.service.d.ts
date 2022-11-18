import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { CreatePreferenciaExercicioDto } from './dto/create-preferencia-exercicio.dto';
import { UpdatePreferenciaExercicioDto } from './dto/update-preferencia-exercicio.dto';
import { PreferenciaExercicio } from './entities/preferencia-exercicio.entity';
export declare class PreferenciaExercicioService {
    private repository;
    constructor(repository: Repository<PreferenciaExercicio>);
    create(createPreferenciaExercicioDto: CreatePreferenciaExercicioDto): Promise<PreferenciaExercicio>;
    findAll(options: IPaginationOptions, search: string): Promise<Pagination<PreferenciaExercicio>>;
    findOne(idPE: number): Promise<PreferenciaExercicio>;
    update(idPE: number, updatePreferenciaExercicioDto: UpdatePreferenciaExercicioDto): Promise<PreferenciaExercicio>;
    remove(idPE: number): Promise<boolean>;
}
