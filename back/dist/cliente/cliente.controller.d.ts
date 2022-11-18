import { CreatePreferenciaDto } from './../preferencia/dto/create-preferencia.dto';
import { Cliente } from './entities/cliente.entity';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    create(createClienteDto: CreateClienteDto): Promise<Cliente>;
    createPref(cliente: Cliente, preferencia: CreatePreferenciaDto): Promise<Cliente>;
    findAll(page: number, limit: number, search: string): Promise<import("nestjs-typeorm-paginate").Pagination<Cliente, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: number): Promise<Cliente>;
    update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente>;
    remove(id: number): Promise<boolean>;
}
