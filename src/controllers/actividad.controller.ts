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
import {Actividad} from '../models';
import {ActividadRepository} from '../repositories';

export class ActividadController {
  constructor(
    @repository(ActividadRepository)
    public actividadRepository : ActividadRepository,
  ) {}

  @post('/actividads', {
    responses: {
      '200': {
        description: 'Actividad model instance',
        content: {'application/json': {schema: getModelSchemaRef(Actividad)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Actividad, {
            title: 'NewActividad',
            exclude: ['id'],
          }),
        },
      },
    })
    actividad: Omit<Actividad, 'id'>,
  ): Promise<Actividad> {
    return this.actividadRepository.create(actividad);
  }

  @get('/actividads/count', {
    responses: {
      '200': {
        description: 'Actividad model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Actividad)) where?: Where<Actividad>,
  ): Promise<Count> {
    return this.actividadRepository.count(where);
  }

  @get('/actividads', {
    responses: {
      '200': {
        description: 'Array of Actividad model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Actividad, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Actividad)) filter?: Filter<Actividad>,
  ): Promise<Actividad[]> {
    return this.actividadRepository.find(filter);
  }

  @patch('/actividads', {
    responses: {
      '200': {
        description: 'Actividad PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Actividad, {partial: true}),
        },
      },
    })
    actividad: Actividad,
    @param.query.object('where', getWhereSchemaFor(Actividad)) where?: Where<Actividad>,
  ): Promise<Count> {
    return this.actividadRepository.updateAll(actividad, where);
  }

  @get('/actividads/{id}', {
    responses: {
      '200': {
        description: 'Actividad model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Actividad, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Actividad)) filter?: Filter<Actividad>
  ): Promise<Actividad> {
    return this.actividadRepository.findById(id, filter);
  }

  @patch('/actividads/{id}', {
    responses: {
      '204': {
        description: 'Actividad PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Actividad, {partial: true}),
        },
      },
    })
    actividad: Actividad,
  ): Promise<void> {
    await this.actividadRepository.updateById(id, actividad);
  }

  @put('/actividads/{id}', {
    responses: {
      '204': {
        description: 'Actividad PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() actividad: Actividad,
  ): Promise<void> {
    await this.actividadRepository.replaceById(id, actividad);
  }

  @del('/actividads/{id}', {
    responses: {
      '204': {
        description: 'Actividad DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.actividadRepository.deleteById(id);
  }
}
