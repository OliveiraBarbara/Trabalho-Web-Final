import { Admin } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
export declare class AdminService {
    private repository;
    private enderecoRepository;
    constructor(repository: Repository<Admin>, enderecoRepository: Repository<Endereco>);
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    findAll(options: IPaginationOptions, search: string): Promise<Pagination<Admin>>;
    findOne(id: number): Promise<Admin>;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin>;
    remove(id: number): Promise<boolean>;
}
