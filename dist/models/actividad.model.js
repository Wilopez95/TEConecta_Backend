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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Actividad = class Actividad extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    __metadata("design:type", Number)
], Actividad.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Actividad.prototype, "Nombre", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Actividad.prototype, "Descripcion", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Actividad.prototype, "Fecha", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Actividad.prototype, "Lugar", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Actividad.prototype, "Tipo", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Actividad.prototype, "Sede", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        default: "http://imagen.com",
    }),
    __metadata("design:type", String)
], Actividad.prototype, "urlImagenEvento", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Actividad.prototype, "HoraI", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Actividad.prototype, "HoraF", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], Actividad.prototype, "FK_Cuenta", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Actividad.prototype, "InscripcionFlag", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        default: "Activo",
    }),
    __metadata("design:type", String)
], Actividad.prototype, "Estado", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    __metadata("design:type", Number)
], Actividad.prototype, "Cupo", void 0);
Actividad = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Actividad);
exports.Actividad = Actividad;
//# sourceMappingURL=actividad.model.js.map