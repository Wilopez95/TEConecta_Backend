import {DefaultCrudRepository} from '@loopback/repository';
import {User, UserRelations} from '../models';
import {MongoDbDatasourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.MongoDB_Datasource') dataSource: MongoDbDatasourceDataSource,
  ) {
    super(User, dataSource);
  }
}
