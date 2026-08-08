"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const Zod_1 = require("../Zod");
const SetModel = zod_1.z.object({
    _id: Zod_1.DocumentId,
    _createdBy: zod_1.z.string(),
    name: zod_1.z.string(),
    learnSettings: zod_1.z
        .object({
        learnedToday: zod_1.z.number(),
        learnedTarget: zod_1.z.number(),
        reviewedToday: zod_1.z.number(),
        reviewedTarget: zod_1.z.number(),
        lastActiveTime: zod_1.z.date()
    })
        .default({
        learnedTarget: 15,
        reviewedTarget: 15,
        reviewedToday: 0,
        learnedToday: 0,
        lastActiveTime: new Date()
    })
});
exports.default = SetModel;
