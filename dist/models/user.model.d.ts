import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id: string;
    email: string;
    password: string;
    Nombre: string;
    Descripcion: string;
    Telefono?: string;
    Ubicacion?: string;
    Sede: string;
    urlImagenPerfil?: string;
    Encargado?: string;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
