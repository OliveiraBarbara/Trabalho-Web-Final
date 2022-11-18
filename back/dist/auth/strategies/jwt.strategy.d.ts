import { Strategy } from 'passport-jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioPayload } from '../models/user-payload.model';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    validate(payload: UsuarioPayload): Promise<any>;
}
export {};
