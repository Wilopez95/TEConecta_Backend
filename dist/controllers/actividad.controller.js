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
let ActividadController = class ActividadController {
    constructor(actividadRepository) {
        this.actividadRepository = actividadRepository;
    }
    async create(actividad) {
        return this.actividadRepository.create(actividad);
    }
    async count(where) {
        return this.actividadRepository.count(where);
    }
    async find(filter) {
        return this.actividadRepository.find(filter);
    }
    async updateAll(actividad, where) {
        return this.actividadRepository.updateAll(actividad, where);
    }
    async findById(id, filter) {
        return this.actividadRepository.findById(id, filter);
    }
    async updateById(id, actividad) {
        await this.actividadRepository.updateById(id, actividad);
    }
    async replaceById(id, actividad) {
        await this.actividadRepository.replaceById(id, actividad);
    }
    async deleteById(id) {
        await this.actividadRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/actividads', {
        responses: {
            '200': {
                description: 'Actividad model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Actividad) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Actividad, {
                    title: 'NewActividad',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ActividadController.prototype, "create", null);
__decorate([
    rest_1.get('/actividads/count', {
        responses: {
            '200': {
                description: 'Actividad model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Actividad))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ActividadController.prototype, "count", null);
__decorate([
    rest_1.get('/actividads', {
        responses: {
            '200': {
                description: 'Array of Actividad model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Actividad, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Actividad))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ActividadController.prototype, "find", null);
__decorate([
    rest_1.patch('/actividads', {
        responses: {
            '200': {
                description: 'Actividad PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Actividad, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Actividad))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Actividad, Object]),
    __metadata("design:returntype", Promise)
], ActividadController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/actividads/{id}', {
        responses: {
            '200': {
                description: 'Actividad model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Actividad, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Actividad))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ActividadController.prototype, "findById", null);
__decorate([
    rest_1.patch('/actividads/{id}', {
        responses: {
            '204': {
                description: 'Actividad PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Actividad, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Actividad]),
    __metadata("design:returntype", Promise)
], ActividadController.prototype, "updateById", null);
__decorate([
    rest_1.put('/actividads/{id}', {
        responses: {
            '204': {
                description: 'Actividad PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Actividad]),
    __metadata("design:returntype", Promise)
], ActividadController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/actividads/{id}', {
        responses: {
            '204': {
                description: 'Actividad DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ActividadController.prototype, "deleteById", null);
ActividadController = __decorate([
    __param(0, repository_1.repository(repositories_1.ActividadRepository)),
    __metadata("design:paramtypes", [repositories_1.ActividadRepository])
], ActividadController);
exports.ActividadController = ActividadController;
//# sourceMappingURL=actividad.controller.js.map