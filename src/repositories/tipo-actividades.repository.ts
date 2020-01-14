import {DefaultCrudRepository} from '@loopback/repository';
import {TipoActividades, TipoActividadesRelations} from '../models';
import {MongoDbDatasourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TipoActividadesRepository extends DefaultCrudRepository<
  TipoActividades,
  typeof TipoActividades.prototype.id,
  TipoActividadesRelations
> {
  constructor(
    @inject('datasources.MongoDB_Datasource') dataSource: MongoDbDatasourceDataSource,
  ) {
    super(TipoActividades, dataSource);
  }
}
