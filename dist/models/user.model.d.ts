import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    email: string;
    password: string;
    Nombre: string;
    Telefono: string;
    Sede: number;
    Ubicacion: string;
    urlImgPerfil?: string;
    Encargado?: string;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
