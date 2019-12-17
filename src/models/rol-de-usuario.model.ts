import { Entity, model, property, belongsTo } from '@loopback/repository';
//import { Cuenta } from './cuenta.model';
import { User } from './user.model';
import { Rol } from './rol.model';

@model({ settings: { strict: false } })
export class RolDeUsuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  // Define well-known properties here
  @belongsTo(() => User)
  userId: String;

  @belongsTo(() => Rol)
  roleId: String;
  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RolDeUsuario>) {
    super(data);
  }
}

export interface RolDeUsuarioRelations {
  // describe navigational properties here
}

export type RolDeUsuarioWithRelations = RolDeUsuario & RolDeUsuarioRelations;
