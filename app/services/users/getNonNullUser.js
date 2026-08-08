"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCurrent_1 = __importDefault(require("./getCurrent"));
const getNonNullUser = async () => {
    const user = await (0, getCurrent_1.default)({});
    if (user === null) {
        throw "User is null";
    }
    return user;
};
exports.default = getNonNullUser;
