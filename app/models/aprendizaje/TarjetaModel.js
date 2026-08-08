"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const Zod_1 = require("../Zod");
const FieldsModel = zod_1.z.object({
    pregunta: zod_1.z.string(),
    respuesta: zod_1.z.string(),
    type: zod_1.z.literal('default').default('default')
});
const ReviewLogModel = zod_1.z.object({
    interval: zod_1.z.number(),
    efactor: zod_1.z.number(),
    repetition: zod_1.z.number()
});
const TarjetaModel = zod_1.z.object({
    _id: Zod_1.DocumentId,
    _createdBy: zod_1.z.string(),
    _createdAt: zod_1.z.date().default(new Date()),
    _tarjetaGrupoId: zod_1.z.string(),
    fieldsModel: FieldsModel,
    reviewLog: ReviewLogModel.default({
        interval: 0,
        efactor: 2.5,
        repetition: 0
    }),
    dueDate: zod_1.z.date().nullable().default(null)
});
exports.default = TarjetaModel;
