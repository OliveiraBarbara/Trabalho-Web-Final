import { PreferenciaExercicioService } from './preferencia-exercicio.service';
import { CreatePreferenciaExercicioDto } from './dto/create-preferencia-exercicio.dto';
import { UpdatePreferenciaExercicioDto } from './dto/update-preferencia-exercicio.dto';
export declare class PreferenciaExercicioController {
    private readonly preferenciaExercicioService;
    constructor(preferenciaExercicioService: PreferenciaExercicioService);
    create(createPreferenciaExercicioDto: CreatePreferenciaExercicioDto): Promise<import("./entities/preferencia-exercicio.entity").PreferenciaExercicio>;
    findAll(page: number, limit: number, search: string): Promise<import("nestjs-typeorm-paginate").Pagination<import("./entities/preferencia-exercicio.entity").PreferenciaExercicio, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: number): Promise<import("./entities/preferencia-exercicio.entity").PreferenciaExercicio>;
    update(id: number, updatePreferenciaExercicioDto: UpdatePreferenciaExercicioDto): Promise<import("./entities/preferencia-exercicio.entity").PreferenciaExercicio>;
    remove(id: number): Promise<boolean>;
}
