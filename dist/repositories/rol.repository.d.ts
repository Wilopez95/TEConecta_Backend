import { DefaultCrudRepository } from '@loopback/repository';
import { Rol, RolRelations } from '../models';
import { HerokuL5Lxs98XDataSource } from '../datasources';
export declare class RolRepository extends DefaultCrudRepository<Rol, typeof Rol.prototype.id, RolRelations> {
    constructor(dataSource: HerokuL5Lxs98XDataSource);
}
