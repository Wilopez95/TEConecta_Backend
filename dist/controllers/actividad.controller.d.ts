import { Count, Filter, Where } from '@loopback/repository';
import { Actividad } from '../models';
import { ActividadRepository } from '../repositories';
export declare class ActividadController {
    actividadRepository: ActividadRepository;
    constructor(actividadRepository: ActividadRepository);
    create(actividad: Omit<Actividad, 'id'>): Promise<Actividad>;
    count(where?: Where<Actividad>): Promise<Count>;
    find(filter?: Filter<Actividad>): Promise<Actividad[]>;
    updateAll(actividad: Actividad, where?: Where<Actividad>): Promise<Count>;
    findById(id: number, filter?: Filter<Actividad>): Promise<Actividad>;
    updateById(id: number, actividad: Actividad): Promise<void>;
    replaceById(id: number, actividad: Actividad): Promise<void>;
    deleteById(id: number): Promise<void>;
}
