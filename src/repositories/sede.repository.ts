import {DefaultCrudRepository} from '@loopback/repository';
import {Sede, SedeRelations} from '../models';
import {MongoDbDatasourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SedeRepository extends DefaultCrudRepository<
  Sede,
  typeof Sede.prototype.id,
  SedeRelations
> {
  constructor(
    @inject('datasources.MongoDB_Datasource') dataSource: MongoDbDatasourceDataSource,
  ) {
    super(Sede, dataSource);
  }
}
