import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Activity } from '../models';
import { ActivityRepository } from '../repositories';
import { secured, SecuredType } from '../auth';

/*
const cron = require('cron');
const cronJob = cron.job("00 00 00 * * *", function () {
  // perform operation e.g. GET request http.get() etc.
  console.info('Inicio de trabajo programado');
  var activityRepository: ActivityRepository;
  activityRepository = new ActivityRepository(MongoDbDatasourceDataSource);
  activityRepository.updateAll({ state: 'Finalizado' }, { date: { lt: new Date() } });
});
cronJob.start();*/

export class ActivityController {
  constructor(
    @repository(ActivityRepository)
    public activityRepository: ActivityRepository,
  ) { }

  async finalizarActivities(): Promise<void> {
    this.activityRepository.updateAll({ state: 'Finalizado' }, { date: { lt: new Date() } });
  }

  @post('/activities', {
    responses: {
      '200': {
        description: 'Activity model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Activity) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activity, {
            title: 'NewActivity',
            exclude: ['id'],
          }),
        },
      },
    })
    activity: Omit<Activity, 'id'>,
  ): Promise<Activity> {
    return this.activityRepository.create(activity);
  }

  @get('/activities/count', {
    responses: {
      '200': {
        description: 'Activity model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Activity)) where?: Where<Activity>,
  ): Promise<Count> {
    return this.activityRepository.count(where);
  }

  @get('/allactivities', {//Trae todas las actividades sin importar su estado
    responses: {
      '200': {
        description: 'Array of Activity model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Activity, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Activity)) filter?: Filter<Activity>,
  ): Promise<Activity[]> {
    return this.activityRepository.find(filter);
  }

  @get('/allactivitiesfeed', {//Esta trae las actividades que poseen el estado activo y que fecha sea superior a la fecha de Consulta
    responses: {
      '200': {
        description: 'Array of Activity model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Activity, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async findfeed(
    @param.query.object('filter', getFilterSchemaFor(Activity)) filter?: Filter<Activity>,
  ): Promise<Activity[]> {
    var today = new Date();
    var myToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
    return this.activityRepository.find({ where: { state: 'Activo', date: { gte: myToday } }, order: ['date ASC'], });
  }

  @get('/allactivitiesindate/{date_look}', {//Esta trae las actividades que poseen el estado activo y que fecha sea igual a la fecha de Consulta, es para propositos del filtro
    responses: {
      '200': {
        description: 'Array of Activity model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Activity, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async findInDate(
    @param.query.date('date_look') date_look: Date,
    @param.query.object('filter', getFilterSchemaFor(Activity)) filter?: Filter<Activity>,
  ): Promise<Activity[]> {
    return this.activityRepository.find({ where: { state: 'Activo', date: date_look } });
  }



  @get('/activities/{id_user}', {
    responses: {
      '200': {
        description: 'Array of Activity model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Activity, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async findmyactivity(
    @param.path.string('id_user') id_user: string,
  ): Promise<Activity[]> {
    return this.activityRepository.find({
      where: {
        fk_user: id_user
      }
    });
  }



  @patch('/activities', {
    responses: {
      '200': {
        description: 'Activity PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @secured(SecuredType.HAS_ANY_ROLE, ['ADMINREG', 'ADMIN'])
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activity, { partial: true }),
        },
      },
    })
    activity: Activity,
    @param.query.object('where', getWhereSchemaFor(Activity)) where?: Where<Activity>,
  ): Promise<Count> {
    return this.activityRepository.updateAll(activity, where);
  }

  @get('/activitie/{id}', {
    responses: {
      '200': {
        description: 'Activity model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Activity, { includeRelations: true }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(Activity)) filter?: Filter<Activity>
  ): Promise<Activity> {
    return this.activityRepository.findById(id, filter);
  }

  @patch('/activities/{id}', {
    responses: {
      '204': {
        description: 'Activity PATCH success',
      },
    },
  })
  @secured(SecuredType.HAS_ANY_ROLE, ['ADMINREG', 'ADMIN'])
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activity, { partial: true }),
        },
      },
    })
    activity: Activity,
  ): Promise<void> {
    await this.activityRepository.updateById(id, activity);
  }

  @put('/activities/{id}', {
    responses: {
      '204': {
        description: 'Activity PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() activity: Activity,
  ): Promise<void> {
    await this.activityRepository.replaceById(id, activity);
  }

  @del('/activities/{id}', {
    responses: {
      '204': {
        description: 'Activity DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.activityRepository.deleteById(id);
  }
}
