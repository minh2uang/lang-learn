"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const Zod_1 = require("../Zod");
const CardModel = zod_1.z.object({
    start: zod_1.z.number(),
    end: zod_1.z.number(),
    videoId: zod_1.z.string(),
    dueDate: zod_1.z
        .string()
        .nullable()
        .transform((i) => (i ? new Date(i) : null)),
    nivel: zod_1.z.number(),
    _setId: Zod_1.DocumentId,
    _id: Zod_1.DocumentId,
    _createdBy: zod_1.z.string()
});
exports.default = CardModel;
