import { UserRepository, RolDeUsuarioRepository } from '../repositories';
import { Credentials } from '../auth';
export declare class loginController {
    private userRepository;
    private userRoleRepository;
    constructor(userRepository: UserRepository, userRoleRepository: RolDeUsuarioRepository);
    login(credentials: Credentials): Promise<{
        token: any;
        id: string;
        email: string;
        roles: String[];
    }>;
}
