import { UsuarioToken } from './models/user-token.model';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Usuario } from 'src/usuario/entities/usuario.entity';
export declare class AuthService {
    private readonly usuarioService;
    private readonly jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    login(usuario: Usuario): Promise<UsuarioToken>;
    validateUsuario(email: string, pass: string): Promise<Usuario>;
}
