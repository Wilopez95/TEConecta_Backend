import { Entity } from '@loopback/repository';
export declare class RolDeUsuario extends Entity {
    id?: string;
    userId: String;
    roleId: String;
    [prop: string]: any;
    constructor(data?: Partial<RolDeUsuario>);
}
export interface RolDeUsuarioRelations {
}
export declare type RolDeUsuarioWithRelations = RolDeUsuario & RolDeUsuarioRelations;
