import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Exercicio } from './entities/exercicio.entity';
import { CreateExercicioDto } from './dto/create-exercicio.dto';
import { UpdateExercicioDto } from './dto/update-exercicio.dto';
import { Repository } from 'typeorm';
export declare class ExercicioService {
    private repository;
    constructor(repository: Repository<Exercicio>);
    create(createExercicioDto: CreateExercicioDto): Promise<Exercicio>;
    findAll(options: IPaginationOptions, search?: string): Promise<Pagination<Exercicio>>;
    findOne(idExec: number): Promise<Exercicio>;
    update(idExec: number, updateExercicioDto: UpdateExercicioDto): Promise<Exercicio>;
    remove(idExec: number): Promise<boolean>;
}
