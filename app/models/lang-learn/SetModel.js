"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const Zod_1 = require("../Zod");
const SetModel = zod_1.z.object({
    _id: Zod_1.DocumentId,
    _createdBy: zod_1.z.string(),
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    revisedToday: zod_1.z.number().default(0),
    learnedToday: zod_1.z.number().default(0),
    lastLearnedTime: zod_1.z
        .string()
        .transform((i) => (i ? new Date(i) : new Date()))
        .default(new Date().toString()),
    isHidden: zod_1.z.boolean().optional(),
    setGroup: zod_1.z.string().optional()
});
exports.default = SetModel;
