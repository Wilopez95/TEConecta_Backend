import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Cuenta } from './cuenta.model';
import { Rol } from './rol.model';

@model({ settings: { strict: false } })
export class RolDeUsuario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  // Define well-known properties here
  @belongsTo(() => Cuenta)
  userId: number;

  @belongsTo(() => Rol)
  roleId: number;
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
