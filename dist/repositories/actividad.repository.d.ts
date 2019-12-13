import { DefaultCrudRepository } from '@loopback/repository';
import { Actividad, ActividadRelations } from '../models';
import { HerokuL5Lxs98XDataSource } from '../datasources';
export declare class ActividadRepository extends DefaultCrudRepository<Actividad, typeof Actividad.prototype.id, ActividadRelations> {
    constructor(dataSource: HerokuL5Lxs98XDataSource);
}
