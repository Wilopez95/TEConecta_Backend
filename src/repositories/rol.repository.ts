import {DefaultCrudRepository} from '@loopback/repository';
import {Rol, RolRelations} from '../models';
import {HerokuL5Lxs98XDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RolRepository extends DefaultCrudRepository<
  Rol,
  typeof Rol.prototype.id,
  RolRelations
> {
  constructor(
    @inject('datasources.heroku_l5lxs98x') dataSource: HerokuL5Lxs98XDataSource,
  ) {
    super(Rol, dataSource);
  }
}
