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
import {Assistance} from '../models';
import {AssistanceRepository} from '../repositories';

export class AssistanceController {
  constructor(
    @repository(AssistanceRepository)
    public assistanceRepository : AssistanceRepository,
  ) {}

  @post('/assistances', {
    responses: {
      '200': {
        description: 'Assistance model instance',
        content: {'application/json': {schema: getModelSchemaRef(Assistance)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Assistance, {
            title: 'NewAssistance',
            exclude: ['id'],
          }),
        },
      },
    })
    assistance: Omit<Assistance, 'id'>,
  ): Promise<Assistance> {
    return this.assistanceRepository.create(assistance);
  }

  @get('/assistances/count', {
    responses: {
      '200': {
        description: 'Assistance model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Assistance)) where?: Where<Assistance>,
  ): Promise<Count> {
    return this.assistanceRepository.count(where);
  }

  @get('/assistances', {
    responses: {
      '200': {
        description: 'Array of Assistance model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Assistance, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Assistance)) filter?: Filter<Assistance>,
  ): Promise<Assistance[]> {
    return this.assistanceRepository.find(filter);
  }

  @patch('/assistances', {
    responses: {
      '200': {
        description: 'Assistance PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Assistance, {partial: true}),
        },
      },
    })
    assistance: Assistance,
    @param.query.object('where', getWhereSchemaFor(Assistance)) where?: Where<Assistance>,
  ): Promise<Count> {
    return this.assistanceRepository.updateAll(assistance, where);
  }

  @get('/assistances/{id}', {
    responses: {
      '200': {
        description: 'Assistance model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Assistance, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(Assistance)) filter?: Filter<Assistance>
  ): Promise<Assistance> {
    return this.assistanceRepository.findById(id, filter);
  }

  @patch('/assistances/{id}', {
    responses: {
      '204': {
        description: 'Assistance PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Assistance, {partial: true}),
        },
      },
    })
    assistance: Assistance,
  ): Promise<void> {
    await this.assistanceRepository.updateById(id, assistance);
  }

  @put('/assistances/{id}', {
    responses: {
      '204': {
        description: 'Assistance PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() assistance: Assistance,
  ): Promise<void> {
    await this.assistanceRepository.replaceById(id, assistance);
  }

  @del('/assistances/{id}', {
    responses: {
      '204': {
        description: 'Assistance DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.assistanceRepository.deleteById(id);
  }
}
