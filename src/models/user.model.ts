import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;


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
  })
  Telefono?: string;

  @property({
    type: 'string',
  })
  Ubicacion?: string;

  @property({
    type: 'string',
    required: true,
  })
  Sede: string;

  @property({
    type: 'string',
    default: "http://imagen.com",
  })
  urlImagenPerfil?: string;

  @property({
    type: 'string',
  })
  Encargado?: string;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
