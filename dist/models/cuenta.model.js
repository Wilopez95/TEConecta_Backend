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
let Cuenta = class Cuenta extends repository_1.Entity {
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
], Cuenta.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Cuenta.prototype, "Nombre", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Cuenta.prototype, "Descripcion", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        default: 1,
    }),
    __metadata("design:type", Number)
], Cuenta.prototype, "Tipo", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Cuenta.prototype, "Telefono", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Cuenta.prototype, "Ubicacion", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Cuenta.prototype, "Sede", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Cuenta.prototype, "Correo", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Cuenta.prototype, "Contrasena", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        default: "http://imagen.com",
    }),
    __metadata("design:type", String)
], Cuenta.prototype, "urlImagenPerfil", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Cuenta.prototype, "Encargado", void 0);
Cuenta = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Cuenta);
exports.Cuenta = Cuenta;
//# sourceMappingURL=cuenta.model.js.map