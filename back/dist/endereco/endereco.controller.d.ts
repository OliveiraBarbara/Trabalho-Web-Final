import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
export declare class EnderecoController {
    private readonly enderecoService;
    constructor(enderecoService: EnderecoService);
    create(createEnderecoDto: CreateEnderecoDto): Promise<import("./entities/endereco.entity").Endereco>;
    findAll(page: number, limit: number, search: string): Promise<import("nestjs-typeorm-paginate").Pagination<import("./entities/endereco.entity").Endereco, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: string): Promise<import("./entities/endereco.entity").Endereco>;
    update(id: string, updateEnderecoDto: UpdateEnderecoDto): string;
    remove(id: string): Promise<boolean>;
}
