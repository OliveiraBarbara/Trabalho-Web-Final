import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<import("./entities/admin.entity").Admin>;
    findAll(page: number, limit: number, search: string): Promise<import("nestjs-typeorm-paginate").Pagination<import("./entities/admin.entity").Admin, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: number): Promise<import("./entities/admin.entity").Admin>;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<import("./entities/admin.entity").Admin>;
    remove(id: number): Promise<boolean>;
}
