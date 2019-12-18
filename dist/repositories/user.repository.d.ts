import { DefaultCrudRepository } from '@loopback/repository';
import { User, UserRelations } from '../models';
import { HerokuL5Lxs98XDataSource } from '../datasources';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.email, UserRelations> {
    constructor(dataSource: HerokuL5Lxs98XDataSource);
}
