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
exports.TipoAmbito = void 0;
var typeorm_1 = require("typeorm");
var TipoAmbito = /** @class */ (function () {
    function TipoAmbito() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int" }),
        __metadata("design:type", Number)
    ], TipoAmbito.prototype, "id_tipo_ambito", void 0);
    __decorate([
        typeorm_1.Column({ type: "nvarchar", length: 50, nullable: false }),
        __metadata("design:type", String)
    ], TipoAmbito.prototype, "descripcion_tipo_ambito", void 0);
    TipoAmbito = __decorate([
        typeorm_1.Entity()
    ], TipoAmbito);
    return TipoAmbito;
}());
exports.TipoAmbito = TipoAmbito;
