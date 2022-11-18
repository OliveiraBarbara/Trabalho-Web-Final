import { EstadoService } from './estado.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
export declare class EstadoController {
    private readonly estadoService;
    constructor(estadoService: EstadoService);
    create(createEstadoDto: CreateEstadoDto): Promise<import("./entities/estado.entity").Estado>;
    findAll(page: number, limit: number, search: string): Promise<import("nestjs-typeorm-paginate").Pagination<import("./entities/estado.entity").Estado, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: number): Promise<import("./entities/estado.entity").Estado>;
    update(id: number, updateEstadoDto: UpdateEstadoDto): Promise<import("./entities/estado.entity").Estado>;
    remove(id: number): Promise<boolean>;
}
