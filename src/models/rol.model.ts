import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Rol extends Entity {
  @property({
    type: 'string',
    required: true,
    default: "usuario",
  })
  descripcion: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  nivelDeAcceso: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Rol>) {
    super(data);
  }
}

export interface RolRelations {
  // describe navigational properties here
}

export type RolWithRelations = Rol & RolRelations;
