import { LocalTreinamentoService } from './local-treinamento.service';
import { CreateLocalTreinamentoDto } from './dto/create-local-treinamento.dto';
import { UpdateLocalTreinamentoDto } from './dto/update-local-treinamento.dto';
import { Instrutor } from 'src/instrutor/entities/instrutor.entity';
export declare class LocalTreinamentoController {
    private readonly localTreinamentoService;
    constructor(localTreinamentoService: LocalTreinamentoService);
    create(createLocalTreinamentoDto: CreateLocalTreinamentoDto): Promise<import("./entities/local-treinamento.entity").LocalTreinamento>;
    findAll(cliente: Instrutor, page: number, limit: number, search: string): Promise<import("nestjs-typeorm-paginate").Pagination<import("./entities/local-treinamento.entity").LocalTreinamento, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(idLocal: number): Promise<import("./entities/local-treinamento.entity").LocalTreinamento>;
    update(idLocal: number, updateLocalTreinamentoDto: UpdateLocalTreinamentoDto): Promise<import("./entities/local-treinamento.entity").LocalTreinamento>;
    remove(idLocal: number): Promise<boolean>;
}
