import { DefaultCrudRepository } from '@loopback/repository';
import { Asistencia, AsistenciaRelations } from '../models';
import { HerokuL5Lxs98XDataSource } from '../datasources';
export declare class AsistenciaRepository extends DefaultCrudRepository<Asistencia, typeof Asistencia.prototype.id, AsistenciaRelations> {
    constructor(dataSource: HerokuL5Lxs98XDataSource);
}
