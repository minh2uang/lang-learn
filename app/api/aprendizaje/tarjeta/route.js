"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("../../utils");
exports.GET = (0, utils_1.genericFunction)(async () => await (0, utils_1.findMany)('tarjetas', {}));
exports.POST = (0, utils_1.genericFunction)(async (params, body) => await (0, utils_1.createOne)('tarjetas', body));
