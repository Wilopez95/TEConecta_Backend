import {DefaultCrudRepository} from '@loopback/repository';
import {Actividad, ActividadRelations} from '../models';
import {HerokuL5Lxs98XDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ActividadRepository extends DefaultCrudRepository<
  Actividad,
  typeof Actividad.prototype.id,
  ActividadRelations
> {
  constructor(
    @inject('datasources.heroku_l5lxs98x') dataSource: HerokuL5Lxs98XDataSource,
  ) {
    super(Actividad, dataSource);
  }
}
