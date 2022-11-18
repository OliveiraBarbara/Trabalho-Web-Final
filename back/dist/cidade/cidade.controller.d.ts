import { CidadeService } from './cidade.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
export declare class CidadeController {
    private readonly cidadeService;
    constructor(cidadeService: CidadeService);
    create(createCidadeDto: CreateCidadeDto): Promise<import("./entities/cidade.entity").Cidade>;
    findAll(page: number, limit: number, search: string): Promise<import("nestjs-typeorm-paginate").Pagination<import("./entities/cidade.entity").Cidade, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: number): Promise<import("./entities/cidade.entity").Cidade>;
    update(id: number, updateCidadeDto: UpdateCidadeDto): Promise<import("./entities/cidade.entity").Cidade>;
    remove(id: number): Promise<boolean>;
}
