'use server';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authConfigs_1 = __importDefault(require("@/app/api/auth/[...nextauth]/authConfigs"));
const next_auth_1 = require("next-auth");
const usersGetCurrentService = async ({}) => {
    const session = await (0, next_auth_1.getServerSession)(authConfigs_1.default);
    return session?.user?.email ? session.user : null;
};
exports.default = usersGetCurrentService;
