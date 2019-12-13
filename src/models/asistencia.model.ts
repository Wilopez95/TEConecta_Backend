import {Entity, model, property} from '@loopback/repository';

@model()
export class Asistencia extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  FK_Actividad: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Carnet: string;


  constructor(data?: Partial<Asistencia>) {
    super(data);
  }
}

export interface AsistenciaRelations {
  // describe navigational properties here
}

export type AsistenciaWithRelations = Asistencia & AsistenciaRelations;
