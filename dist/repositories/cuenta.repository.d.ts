import { DefaultCrudRepository } from '@loopback/repository';
import { Cuenta, CuentaRelations } from '../models';
import { HerokuL5Lxs98XDataSource } from '../datasources';
export declare class CuentaRepository extends DefaultCrudRepository<Cuenta, typeof Cuenta.prototype.id, CuentaRelations> {
    constructor(dataSource: HerokuL5Lxs98XDataSource);
}
