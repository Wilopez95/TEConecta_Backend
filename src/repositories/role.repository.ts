import {DefaultCrudRepository} from '@loopback/repository';
import {Role, RoleRelations} from '../models';
import {MongoDbDatasourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RoleRepository extends DefaultCrudRepository<
  Role,
  typeof Role.prototype.id,
  RoleRelations
> {
  constructor(
    @inject('datasources.MongoDB_Datasource') dataSource: MongoDbDatasourceDataSource,
  ) {
    super(Role, dataSource);
  }
}
