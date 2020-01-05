import { Entity, model, property } from '@loopback/repository';

@model()
export class Activity extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    required: false,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({//esto representa a la sede donde se realiza la actividad
    type: 'string',
    required: true,
  })
  location: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'string',
  })
  place?: string;

  @property({
    type: 'string',
  })
  urlImgActivity?: string;

  @property({
    type: 'string',
    required: true,
  })
  timeI: string;

  @property({
    type: 'string',
  })
  timeF?: string;

  @property({
    type: 'string',
    required: true,
  })
  fk_user: string;

  @property({
    type: 'boolean',
    default: false,
  })
  assistance?: boolean;

  @property({
    type: 'string',
    required: true,
    default: "activo",
  })
  state: string;

  @property({
    type: 'number',
    default: 0,
  })
  space?: number;


  constructor(data?: Partial<Activity>) {
    super(data);
  }
}

export interface ActivityRelations {
  // describe navigational properties here
}

export type ActivityWithRelations = Activity & ActivityRelations;
