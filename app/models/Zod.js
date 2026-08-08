"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentId = void 0;
const mongodb_1 = require("mongodb");
const zod_1 = require("zod");
exports.DocumentId = zod_1.z
    .custom(() => true)
    .transform((i) => i ? new mongodb_1.ObjectId(i).toString() : new mongodb_1.ObjectId().toString());
