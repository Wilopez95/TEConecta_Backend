import { Entity } from '@loopback/repository';
export declare class Rol extends Entity {
    descripcion: string;
    id?: string;
    nivelDeAcceso: number;
    [prop: string]: any;
    constructor(data?: Partial<Rol>);
}
export interface RolRelations {
}
export declare type RolWithRelations = Rol & RolRelations;
