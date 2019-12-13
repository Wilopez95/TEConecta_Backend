import {DefaultCrudRepository} from '@loopback/repository';
import {Asistencia, AsistenciaRelations} from '../models';
import {HerokuL5Lxs98XDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AsistenciaRepository extends DefaultCrudRepository<
  Asistencia,
  typeof Asistencia.prototype.id,
  AsistenciaRelations
> {
  constructor(
    @inject('datasources.heroku_l5lxs98x') dataSource: HerokuL5Lxs98XDataSource,
  ) {
    super(Asistencia, dataSource);
  }
}
