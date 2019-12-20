import {DefaultCrudRepository} from '@loopback/repository';
import {Assistance, AssistanceRelations} from '../models';
import {MongoDbDatasourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AssistanceRepository extends DefaultCrudRepository<
  Assistance,
  typeof Assistance.prototype.id,
  AssistanceRelations
> {
  constructor(
    @inject('datasources.MongoDB_Datasource') dataSource: MongoDbDatasourceDataSource,
  ) {
    super(Assistance, dataSource);
  }
}
