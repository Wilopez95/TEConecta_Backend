import { Entity, model, property } from '@loopback/repository';

@model()
export class Assistance extends Entity {
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
  fk_activity: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  credential: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  state: string;




  constructor(data?: Partial<Assistance>) {
    super(data);
  }
}

export interface AssistanceRelations {
  // describe navigational properties here
}

export type AssistanceWithRelations = Assistance & AssistanceRelations;
