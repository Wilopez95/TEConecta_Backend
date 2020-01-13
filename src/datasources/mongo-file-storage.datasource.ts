import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mongo-file-storage.datasource.config.json';

export class MongoFileStorageDataSource extends juggler.DataSource {
  static dataSourceName = 'mongo_file_storage';

  constructor(
    @inject('datasources.config.mongo_file_storage', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

//"url": "mongodb://charlie_teconecta:1c2h3a4r@cluster0-shard-00-00-n8f4o.mongodb.net:27017,cluster0-shard-00-01-n8f4o.mongodb.net:27017,cluster0-shard-00-02-n8f4o.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
