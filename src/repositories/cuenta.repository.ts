import {DefaultCrudRepository} from '@loopback/repository';
import {Cuenta, CuentaRelations} from '../models';
import {HerokuL5Lxs98XDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CuentaRepository extends DefaultCrudRepository<
  Cuenta,
  typeof Cuenta.prototype.id,
  CuentaRelations
> {
  constructor(
    @inject('datasources.heroku_l5lxs98x') dataSource: HerokuL5Lxs98XDataSource,
  ) {
    super(Cuenta, dataSource);
  }
}
