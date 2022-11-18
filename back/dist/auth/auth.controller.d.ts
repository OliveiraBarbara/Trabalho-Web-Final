import { Usuario } from 'src/usuario/entities/usuario.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(usuario: Usuario): Promise<import("./models/user-token.model").UsuarioToken>;
    getProfile(user: any): any;
}
