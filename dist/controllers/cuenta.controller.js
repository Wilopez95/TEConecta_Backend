"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CuentaController = class CuentaController {
    constructor(cuentaRepository) {
        this.cuentaRepository = cuentaRepository;
    }
    async create(cuenta) {
        return this.cuentaRepository.create(cuenta);
    }
    async count(where) {
        return this.cuentaRepository.count(where);
    }
    async find(filter) {
        return this.cuentaRepository.find(filter);
    }
    async updateAll(cuenta, where) {
        return this.cuentaRepository.updateAll(cuenta, where);
    }
    async findById(id, filter) {
        return this.cuentaRepository.findById(id, filter);
    }
    async updateById(id, cuenta) {
        await this.cuentaRepository.updateById(id, cuenta);
    }
    async replaceById(id, cuenta) {
        await this.cuentaRepository.replaceById(id, cuenta);
    }
    async deleteById(id) {
        await this.cuentaRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/cuentas', {
        responses: {
            '200': {
                description: 'Cuenta model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Cuenta) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Cuenta, {
                    title: 'NewCuenta',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "create", null);
__decorate([
    rest_1.get('/cuentas/count', {
        responses: {
            '200': {
                description: 'Cuenta model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Cuenta))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "count", null);
__decorate([
    rest_1.get('/cuentas', {
        responses: {
            '200': {
                description: 'Array of Cuenta model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Cuenta, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Cuenta))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "find", null);
__decorate([
    rest_1.patch('/cuentas', {
        responses: {
            '200': {
                description: 'Cuenta PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Cuenta, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Cuenta))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Cuenta, Object]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/cuentas/{id}', {
        responses: {
            '200': {
                description: 'Cuenta model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Cuenta, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Cuenta))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "findById", null);
__decorate([
    rest_1.patch('/cuentas/{id}', {
        responses: {
            '204': {
                description: 'Cuenta PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Cuenta, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Cuenta]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "updateById", null);
__decorate([
    rest_1.put('/cuentas/{id}', {
        responses: {
            '204': {
                description: 'Cuenta PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Cuenta]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/cuentas/{id}', {
        responses: {
            '204': {
                description: 'Cuenta DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CuentaController.prototype, "deleteById", null);
CuentaController = __decorate([
    __param(0, repository_1.repository(repositories_1.CuentaRepository)),
    __metadata("design:paramtypes", [repositories_1.CuentaRepository])
], CuentaController);
exports.CuentaController = CuentaController;
//# sourceMappingURL=cuenta.controller.js.map