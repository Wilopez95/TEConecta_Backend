import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoActividades extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
  })
  Descripcion?: string;


  constructor(data?: Partial<TipoActividades>) {
    super(data);
  }
}

export interface TipoActividadesRelations {
  // describe navigational properties here
}

export type TipoActividadesWithRelations = TipoActividades & TipoActividadesRelations;
