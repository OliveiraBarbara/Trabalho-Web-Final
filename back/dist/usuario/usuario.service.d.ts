import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
export declare class UsuarioService {
    private repository;
    constructor(repository: Repository<Usuario>);
    findOne(id: number): Promise<Usuario>;
    findByEmail(email: string, includePassowrd?: boolean): Promise<Usuario>;
}
