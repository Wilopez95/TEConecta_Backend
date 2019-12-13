import { Count, Filter, Where } from '@loopback/repository';
import { Asistencia } from '../models';
import { AsistenciaRepository } from '../repositories';
export declare class AsistenciaController {
    asistenciaRepository: AsistenciaRepository;
    constructor(asistenciaRepository: AsistenciaRepository);
    create(asistencia: Omit<Asistencia, 'id'>): Promise<Asistencia>;
    count(where?: Where<Asistencia>): Promise<Count>;
    find(filter?: Filter<Asistencia>): Promise<Asistencia[]>;
    updateAll(asistencia: Asistencia, where?: Where<Asistencia>): Promise<Count>;
    findById(id: number, filter?: Filter<Asistencia>): Promise<Asistencia>;
    updateById(id: number, asistencia: Asistencia): Promise<void>;
    replaceById(id: number, asistencia: Asistencia): Promise<void>;
    deleteById(id: number): Promise<void>;
}
