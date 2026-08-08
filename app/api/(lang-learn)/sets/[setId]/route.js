"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATCH = exports.GET = exports.DELETE = void 0;
const DbModel_1 = require("@/app/models/DbModel");
const DbService_1 = __importDefault(require("@/app/services/DbService"));
const DELETE = async (request, { params }) => {
    await (0, DbService_1.default)().getCollection('cards').deleteMany({
        _setId: params.setId
    });
    await (0, DbService_1.default)().getCollection('sets').findOneAndDelete({
        _id: params.setId
    });
    return Response.json({});
};
exports.DELETE = DELETE;
const GET = async (request, { params }) => {
    return Response.json(await (0, DbService_1.default)().getCollection('sets').findOne({
        _id: params.setId
    }));
};
exports.GET = GET;
const PATCH = async (request, { params }) => {
    const validator = DbModel_1.DbModel.shape['sets'].partial();
    const { _id: _, ...rest } = validator.parse(await request.json());
    await (0, DbService_1.default)().getCollection('sets').findOneAndUpdate({ _id: params.setId }, {
        $set: rest
    });
    return Response.json(await (0, DbService_1.default)().getCollection('sets').findOne({ _id: params.setId }));
};
exports.PATCH = PATCH;
