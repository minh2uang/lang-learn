"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const next_auth_1 = __importDefault(require("next-auth"));
const authConfigs_1 = __importDefault(require("./authConfigs"));
const handler = (0, next_auth_1.default)(authConfigs_1.default);
exports.GET = handler;
exports.POST = handler;
