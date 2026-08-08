"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = void 0;
const DbService_1 = __importDefault(require("@/app/services/DbService"));
const DELETE = async (request, { params }) => {
    const { cardId } = params;
    await (0, DbService_1.default)().getCollection('cards').deleteOne({
        _id: cardId
    });
    return Response.json({});
};
exports.DELETE = DELETE;
