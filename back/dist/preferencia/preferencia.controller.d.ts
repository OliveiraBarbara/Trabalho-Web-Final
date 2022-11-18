import { PreferenciaService } from './preferencia.service';
import { CreatePreferenciaDto } from './dto/create-preferencia.dto';
import { UpdatePreferenciaDto } from './dto/update-preferencia.dto';
export declare class PreferenciaController {
    private readonly preferenciaService;
    constructor(preferenciaService: PreferenciaService);
    create(createPreferenciaDto: CreatePreferenciaDto): Promise<import("./entities/preferencia.entity").Preferencia>;
    findAll(page: number, limit: number, search: string): Promise<import("nestjs-typeorm-paginate").Pagination<import("./entities/preferencia.entity").Preferencia, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(idPref: number): Promise<import("./entities/preferencia.entity").Preferencia>;
    update(idPref: number, updatePreferenciaDto: UpdatePreferenciaDto): Promise<import("./entities/preferencia.entity").Preferencia>;
    remove(idPref: number): Promise<boolean>;
}
