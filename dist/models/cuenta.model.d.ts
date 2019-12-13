import { Entity } from '@loopback/repository';
export declare class Cuenta extends Entity {
    id?: number;
    Nombre: string;
    Descripcion: string;
    Tipo: number;
    Telefono?: string;
    Ubicacion?: string;
    Sede: string;
    Correo: string;
    Contrasena: string;
    urlImagenPerfil?: string;
    Encargado?: string;
    constructor(data?: Partial<Cuenta>);
}
export interface CuentaRelations {
}
export declare type CuentaWithRelations = Cuenta & CuentaRelations;
