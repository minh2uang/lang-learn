"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.GET = exports.PATCH = void 0;
const utils_1 = require("@/app/api/utils");
exports.PATCH = (0, utils_1.genericFunction)(async (params, body) => await (0, utils_1.updateOne)('tarjetas', { _id: params.id }, body));
exports.GET = (0, utils_1.genericFunction)(async (params) => await (0, utils_1.findOne)('tarjetas', { _id: params.id }));
exports.DELETE = (0, utils_1.genericFunction)(async (params, body) => await (0, utils_1.deleteOne)('tarjetas', { _id: params.id }));
