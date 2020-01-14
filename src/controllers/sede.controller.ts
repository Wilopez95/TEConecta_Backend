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
import {Sede} from '../models';
import {SedeRepository} from '../repositories';

export class SedeController {
  constructor(
    @repository(SedeRepository)
    public sedeRepository : SedeRepository,
  ) {}

  @post('/sedes', {
    responses: {
      '200': {
        description: 'Sede model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sede)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sede, {
            title: 'NewSede',
            exclude: ['id'],
          }),
        },
      },
    })
    sede: Omit<Sede, 'id'>,
  ): Promise<Sede> {
    return this.sedeRepository.create(sede);
  }

  @get('/sedes/count', {
    responses: {
      '200': {
        description: 'Sede model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Sede)) where?: Where<Sede>,
  ): Promise<Count> {
    return this.sedeRepository.count(where);
  }

  @get('/sedes', {
    responses: {
      '200': {
        description: 'Array of Sede model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Sede, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Sede)) filter?: Filter<Sede>,
  ): Promise<Sede[]> {
    return this.sedeRepository.find(filter);
  }

  @patch('/sedes', {
    responses: {
      '200': {
        description: 'Sede PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sede, {partial: true}),
        },
      },
    })
    sede: Sede,
    @param.query.object('where', getWhereSchemaFor(Sede)) where?: Where<Sede>,
  ): Promise<Count> {
    return this.sedeRepository.updateAll(sede, where);
  }

  @get('/sedes/{id}', {
    responses: {
      '200': {
        description: 'Sede model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Sede, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(Sede)) filter?: Filter<Sede>
  ): Promise<Sede> {
    return this.sedeRepository.findById(id, filter);
  }

  @patch('/sedes/{id}', {
    responses: {
      '204': {
        description: 'Sede PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sede, {partial: true}),
        },
      },
    })
    sede: Sede,
  ): Promise<void> {
    await this.sedeRepository.updateById(id, sede);
  }

  @put('/sedes/{id}', {
    responses: {
      '204': {
        description: 'Sede PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sede: Sede,
  ): Promise<void> {
    await this.sedeRepository.replaceById(id, sede);
  }

  @del('/sedes/{id}', {
    responses: {
      '204': {
        description: 'Sede DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sedeRepository.deleteById(id);
  }
}
