import { Entity } from '@loopback/repository';
export declare class Asistencia extends Entity {
    id?: number;
    FK_Actividad: number;
    Nombre: string;
    Carnet: string;
    constructor(data?: Partial<Asistencia>);
}
export interface AsistenciaRelations {
}
export declare type AsistenciaWithRelations = Asistencia & AsistenciaRelations;
