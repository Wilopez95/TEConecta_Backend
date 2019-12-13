import {Entity, model, property} from '@loopback/repository';

@model()
export class Actividad extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  Fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  Lugar: string;

  @property({
    type: 'string',
    required: true,
  })
  Tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  Sede: string;

  @property({
    type: 'string',
    required: true,
    default: "http://imagen.com",
  })
  urlImagenEvento: string;

  @property({
    type: 'string',
    required: true,
  })
  HoraI: string;

  @property({
    type: 'string',
  })
  HoraF?: string;

  @property({
    type: 'number',
    required: true,
  })
  FK_Cuenta: number;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  InscripcionFlag: boolean;

  @property({
    type: 'string',
    required: true,
    default: "Activo",
  })
  Estado: string;

  @property({
    type: 'number',
    default: 0,
  })
  Cupo?: number;


  constructor(data?: Partial<Actividad>) {
    super(data);
  }
}

export interface ActividadRelations {
  // describe navigational properties here
}

export type ActividadWithRelations = Actividad & ActividadRelations;
