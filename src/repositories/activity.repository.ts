import {DefaultCrudRepository} from '@loopback/repository';
import {Activity, ActivityRelations} from '../models';
import {MongoDbDatasourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ActivityRepository extends DefaultCrudRepository<
  Activity,
  typeof Activity.prototype.id,
  ActivityRelations
> {
  constructor(
    @inject('datasources.MongoDB_Datasource') dataSource: MongoDbDatasourceDataSource,
  ) {
    super(Activity, dataSource);
  }
}
