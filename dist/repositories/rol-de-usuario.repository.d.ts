import { DefaultCrudRepository } from '@loopback/repository';
import { RolDeUsuario, RolDeUsuarioRelations } from '../models';
import { HerokuL5Lxs98XDataSource } from '../datasources';
export declare class RolDeUsuarioRepository extends DefaultCrudRepository<RolDeUsuario, typeof RolDeUsuario.prototype.id, RolDeUsuarioRelations> {
    constructor(dataSource: HerokuL5Lxs98XDataSource);
}
