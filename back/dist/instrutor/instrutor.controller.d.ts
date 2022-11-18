import { CreateLocalTreinamentoDto } from './../local-treinamento/dto/create-local-treinamento.dto';
import { CreateExercicioDto } from './../exercicio/dto/create-exercicio.dto';
import { InstrutorService } from './instrutor.service';
import { CreateInstrutorDto } from './dto/create-instrutor.dto';
import { UpdateInstrutorDto } from './dto/update-instrutor.dto';
import { Instrutor } from './entities/instrutor.entity';
export declare class InstrutorController {
    private readonly instrutorService;
    constructor(instrutorService: InstrutorService);
    create(createInstrutorDto: CreateInstrutorDto): Promise<Instrutor>;
    createPref(cliente: Instrutor, exercicio: CreateExercicioDto): Promise<Instrutor>;
    createLocal(cliente: Instrutor, local: CreateLocalTreinamentoDto): Promise<Instrutor>;
    findAll(page: number, limit: number, search: string): Promise<import("nestjs-typeorm-paginate").Pagination<Instrutor, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: number): Promise<Instrutor>;
    update(id: number, updateInstrutorDto: UpdateInstrutorDto): Promise<Instrutor>;
    remove(id: number): Promise<boolean>;
}
