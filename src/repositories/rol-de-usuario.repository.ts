import {DefaultCrudRepository} from '@loopback/repository';
import {RolDeUsuario, RolDeUsuarioRelations} from '../models';
import {HerokuL5Lxs98XDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RolDeUsuarioRepository extends DefaultCrudRepository<
  RolDeUsuario,
  typeof RolDeUsuario.prototype.id,
  RolDeUsuarioRelations
> {
  constructor(
    @inject('datasources.heroku_l5lxs98x') dataSource: HerokuL5Lxs98XDataSource,
  ) {
    super(RolDeUsuario, dataSource);
  }
}
