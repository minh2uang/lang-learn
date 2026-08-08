"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbModel = void 0;
const zod_1 = require("zod");
const CardModel_1 = __importDefault(require("./lang-learn/CardModel"));
const SetModel_1 = __importDefault(require("./lang-learn/SetModel"));
const TarjetaModel_1 = __importDefault(require("./aprendizaje/TarjetaModel"));
const TarjetaGrupoModel_1 = __importDefault(require("./aprendizaje/TarjetaGrupoModel"));
const LangLearnModel = zod_1.z.object({
    cards: CardModel_1.default,
    sets: SetModel_1.default
});
const AprendizajeModel = zod_1.z.object({
    tarjetas: TarjetaModel_1.default,
    tarjetaGrupos: TarjetaGrupoModel_1.default
});
exports.DbModel = zod_1.z
    .object({})
    .merge(LangLearnModel)
    .merge(AprendizajeModel);
