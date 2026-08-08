"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@/app/api/utils");
exports.GET = (0, utils_1.genericFunction)(async (params) => {
    const toReview = await (0, utils_1.findOne)('tarjetas', {
        dueDate: { $lt: new Date() },
        'reviewLog.repetition': { $ne: 0 },
        _tarjetaGrupoId: params.id
    }, { sort: [['reviewLog.dueDate', 'asc']] });
    if (!!toReview) {
        return toReview;
    }
    const toLearn = await (0, utils_1.findOne)('tarjetas', {
        dueDate: null,
        _tarjetaGrupoId: params.id
    }, {
        sort: [['_createdAt', 'asc']]
    });
    if (!!toLearn) {
        return toLearn;
    }
    return null;
});
