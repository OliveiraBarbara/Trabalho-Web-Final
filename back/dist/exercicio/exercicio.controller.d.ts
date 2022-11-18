import { ExercicioService } from './exercicio.service';
import { CreateExercicioDto } from './dto/create-exercicio.dto';
import { UpdateExercicioDto } from './dto/update-exercicio.dto';
export declare class ExercicioController {
    private readonly exercicioService;
    constructor(exercicioService: ExercicioService);
    create(createExercicioDto: CreateExercicioDto): Promise<import("./entities/exercicio.entity").Exercicio>;
    findAll(page: number, limit: number, search: string): Promise<import("nestjs-typeorm-paginate").Pagination<import("./entities/exercicio.entity").Exercicio, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(idExec: number): Promise<import("./entities/exercicio.entity").Exercicio>;
    update(idExec: number, updateExercicioDto: UpdateExercicioDto): Promise<import("./entities/exercicio.entity").Exercicio>;
    remove(idExec: number): Promise<boolean>;
}
