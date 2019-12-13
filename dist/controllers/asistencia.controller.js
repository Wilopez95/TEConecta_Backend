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
let AsistenciaController = class AsistenciaController {
    constructor(asistenciaRepository) {
        this.asistenciaRepository = asistenciaRepository;
    }
    async create(asistencia) {
        return this.asistenciaRepository.create(asistencia);
    }
    async count(where) {
        return this.asistenciaRepository.count(where);
    }
    async find(filter) {
        return this.asistenciaRepository.find(filter);
    }
    async updateAll(asistencia, where) {
        return this.asistenciaRepository.updateAll(asistencia, where);
    }
    async findById(id, filter) {
        return this.asistenciaRepository.findById(id, filter);
    }
    async updateById(id, asistencia) {
        await this.asistenciaRepository.updateById(id, asistencia);
    }
    async replaceById(id, asistencia) {
        await this.asistenciaRepository.replaceById(id, asistencia);
    }
    async deleteById(id) {
        await this.asistenciaRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/asistencias', {
        responses: {
            '200': {
                description: 'Asistencia model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Asistencia) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Asistencia, {
                    title: 'NewAsistencia',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AsistenciaController.prototype, "create", null);
__decorate([
    rest_1.get('/asistencias/count', {
        responses: {
            '200': {
                description: 'Asistencia model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Asistencia))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AsistenciaController.prototype, "count", null);
__decorate([
    rest_1.get('/asistencias', {
        responses: {
            '200': {
                description: 'Array of Asistencia model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Asistencia, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Asistencia))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AsistenciaController.prototype, "find", null);
__decorate([
    rest_1.patch('/asistencias', {
        responses: {
            '200': {
                description: 'Asistencia PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Asistencia, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Asistencia))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Asistencia, Object]),
    __metadata("design:returntype", Promise)
], AsistenciaController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/asistencias/{id}', {
        responses: {
            '200': {
                description: 'Asistencia model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Asistencia, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Asistencia))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AsistenciaController.prototype, "findById", null);
__decorate([
    rest_1.patch('/asistencias/{id}', {
        responses: {
            '204': {
                description: 'Asistencia PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Asistencia, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Asistencia]),
    __metadata("design:returntype", Promise)
], AsistenciaController.prototype, "updateById", null);
__decorate([
    rest_1.put('/asistencias/{id}', {
        responses: {
            '204': {
                description: 'Asistencia PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Asistencia]),
    __metadata("design:returntype", Promise)
], AsistenciaController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/asistencias/{id}', {
        responses: {
            '204': {
                description: 'Asistencia DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AsistenciaController.prototype, "deleteById", null);
AsistenciaController = __decorate([
    __param(0, repository_1.repository(repositories_1.AsistenciaRepository)),
    __metadata("design:paramtypes", [repositories_1.AsistenciaRepository])
], AsistenciaController);
exports.AsistenciaController = AsistenciaController;
//# sourceMappingURL=asistencia.controller.js.map