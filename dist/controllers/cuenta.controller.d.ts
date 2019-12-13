import { Count, Filter, Where } from '@loopback/repository';
import { Cuenta } from '../models';
import { CuentaRepository } from '../repositories';
export declare class CuentaController {
    cuentaRepository: CuentaRepository;
    constructor(cuentaRepository: CuentaRepository);
    create(cuenta: Omit<Cuenta, 'id'>): Promise<Cuenta>;
    count(where?: Where<Cuenta>): Promise<Count>;
    find(filter?: Filter<Cuenta>): Promise<Cuenta[]>;
    updateAll(cuenta: Cuenta, where?: Where<Cuenta>): Promise<Count>;
    findById(id: number, filter?: Filter<Cuenta>): Promise<Cuenta>;
    updateById(id: number, cuenta: Cuenta): Promise<void>;
    replaceById(id: number, cuenta: Cuenta): Promise<void>;
    deleteById(id: number): Promise<void>;
}
