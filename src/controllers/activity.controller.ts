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

export class ActivityController {
  constructor(
    @repository(ActivityRepository)
    public activityRepository: ActivityRepository,
  ) { }

  @post('/activities', {
    responses: {
      '200': {
        description: 'Activity model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Activity) } },
      },
    },
  })
  @secured(SecuredType.HAS_ANY_ROLE, ['ADMINREG'])
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
  @get('/activities', {
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

  @patch('/activities', {
    responses: {
      '200': {
        description: 'Activity PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
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

  @get('/activities/{id}', {
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
