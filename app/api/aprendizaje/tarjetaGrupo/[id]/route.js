"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.GET = exports.PATCH = void 0;
const utils_1 = require("@/app/api/utils");
const PATCH = (0, utils_1.genericFunction)(async (params, body) => await (0, utils_1.updateOne)('tarjetaGrupos', { _id: params.id }, body));
exports.PATCH = PATCH;
const GET = (0, utils_1.genericFunction)(async (params) => await (0, utils_1.findOne)('tarjetaGrupos', { _id: params.id }));
exports.GET = GET;
const DELETE = (0, utils_1.genericFunction)(async (params, body) => {
    await (0, utils_1.deleteMany)('tarjetas', { _tarjetaGrupoId: params.id });
    return await (0, utils_1.deleteOne)('tarjetaGrupos', { _id: params.id });
});
exports.DELETE = DELETE;
