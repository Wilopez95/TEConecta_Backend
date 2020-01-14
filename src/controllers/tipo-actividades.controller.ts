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
import {TipoActividades} from '../models';
import {TipoActividadesRepository} from '../repositories';

export class TipoActividadesController {
  constructor(
    @repository(TipoActividadesRepository)
    public tipoActividadesRepository : TipoActividadesRepository,
  ) {}

  @post('/tipo-actividades', {
    responses: {
      '200': {
        description: 'TipoActividades model instance',
        content: {'application/json': {schema: getModelSchemaRef(TipoActividades)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoActividades, {
            title: 'NewTipoActividades',
            exclude: ['id'],
          }),
        },
      },
    })
    tipoActividades: Omit<TipoActividades, 'id'>,
  ): Promise<TipoActividades> {
    return this.tipoActividadesRepository.create(tipoActividades);
  }

  @get('/tipo-actividades/count', {
    responses: {
      '200': {
        description: 'TipoActividades model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(TipoActividades)) where?: Where<TipoActividades>,
  ): Promise<Count> {
    return this.tipoActividadesRepository.count(where);
  }

  @get('/tipo-actividades', {
    responses: {
      '200': {
        description: 'Array of TipoActividades model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(TipoActividades, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(TipoActividades)) filter?: Filter<TipoActividades>,
  ): Promise<TipoActividades[]> {
    return this.tipoActividadesRepository.find(filter);
  }

  @patch('/tipo-actividades', {
    responses: {
      '200': {
        description: 'TipoActividades PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoActividades, {partial: true}),
        },
      },
    })
    tipoActividades: TipoActividades,
    @param.query.object('where', getWhereSchemaFor(TipoActividades)) where?: Where<TipoActividades>,
  ): Promise<Count> {
    return this.tipoActividadesRepository.updateAll(tipoActividades, where);
  }

  @get('/tipo-actividades/{id}', {
    responses: {
      '200': {
        description: 'TipoActividades model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TipoActividades, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(TipoActividades)) filter?: Filter<TipoActividades>
  ): Promise<TipoActividades> {
    return this.tipoActividadesRepository.findById(id, filter);
  }

  @patch('/tipo-actividades/{id}', {
    responses: {
      '204': {
        description: 'TipoActividades PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoActividades, {partial: true}),
        },
      },
    })
    tipoActividades: TipoActividades,
  ): Promise<void> {
    await this.tipoActividadesRepository.updateById(id, tipoActividades);
  }

  @put('/tipo-actividades/{id}', {
    responses: {
      '204': {
        description: 'TipoActividades PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tipoActividades: TipoActividades,
  ): Promise<void> {
    await this.tipoActividadesRepository.replaceById(id, tipoActividades);
  }

  @del('/tipo-actividades/{id}', {
    responses: {
      '204': {
        description: 'TipoActividades DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tipoActividadesRepository.deleteById(id);
  }
}
