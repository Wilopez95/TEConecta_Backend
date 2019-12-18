import { Count, Filter, Where } from '@loopback/repository';
import { User } from '../models';
import { UserRepository, RolDeUsuarioRepository } from '../repositories';
import { Credentials } from '../auth';
export declare class UserControllerController {
    userRepository: UserRepository;
    private userRoleRepository;
    constructor(userRepository: UserRepository, userRoleRepository: RolDeUsuarioRepository);
    create(user: User): Promise<User>;
    count(where?: Where<User>): Promise<Count>;
    find(filter?: Filter<User>): Promise<User[]>;
    updateAll(user: User, where?: Where<User>): Promise<Count>;
    findById(id: string, filter?: Filter<User>): Promise<User>;
    updateById(id: string, user: User): Promise<void>;
    replaceById(id: string, user: User): Promise<void>;
    deleteById(id: string): Promise<void>;
    login(credentials: Credentials): Promise<{
        token: any;
        id: string;
        email: string;
        roles: String[];
    }>;
}
