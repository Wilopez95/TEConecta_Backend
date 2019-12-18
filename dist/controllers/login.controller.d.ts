import { User } from '../models';
import { UserRepository, RolDeUsuarioRepository } from '../repositories';
import { Credentials } from '../auth';
export declare class LoginController {
    private userRepository;
    private userRoleRepository;
    constructor(userRepository: UserRepository, userRoleRepository: RolDeUsuarioRepository);
    createUser(user: User): Promise<User>;
    login(credentials: Credentials): Promise<{
        token: any;
        id: string;
        email: string;
        roles: String[];
    }>;
}
