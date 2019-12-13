import { Entity } from '@loopback/repository';
export declare class Actividad extends Entity {
    id?: number;
    Nombre: string;
    Descripcion: string;
    Fecha: string;
    Lugar: string;
    Tipo: string;
    Sede: string;
    urlImagenEvento: string;
    HoraI: string;
    HoraF?: string;
    FK_Cuenta: number;
    InscripcionFlag: boolean;
    Estado: string;
    Cupo?: number;
    constructor(data?: Partial<Actividad>);
}
export interface ActividadRelations {
}
export declare type ActividadWithRelations = Actividad & ActividadRelations;
