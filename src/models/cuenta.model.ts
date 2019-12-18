import { Entity, model, property } from '@loopback/repository';

@model()
export class Cuenta extends Entity {
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
    type: 'number',
    required: true,
    default: 1,
  })
  Tipo: number;

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
    required: true,
  })
  Correo: string;

  @property({
    type: 'string',
    required: true,
  })
  Contrasena: string;

  @property({
    type: 'string',
    default: "http://imagen.com",
  })
  urlImagenPerfil?: string;

  @property({
    type: 'string',
  })
  Encargado?: string;


  constructor(data?: Partial<Cuenta>) {
    super(data);
  }
}

export interface CuentaRelations {
  // describe navigational properties here
}

export type CuentaWithRelations = Cuenta & CuentaRelations;
