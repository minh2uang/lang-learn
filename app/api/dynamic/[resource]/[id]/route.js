"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATCH = exports.DELETE = exports.GET = void 0;
const DbModel_1 = require("@/app/models/DbModel");
const DbService_1 = __importDefault(require("@/app/services/DbService"));
const getNonNullUser_1 = __importDefault(require("@/app/services/users/getNonNullUser"));
const GET = async (request, { params }) => {
    const resource = params.resource;
    const _id = params.id;
    return Response.json(await (0, DbService_1.default)()
        .getCollection(resource)
        .findOne({
        _id,
        _createdBy: (await (0, getNonNullUser_1.default)()).email
    }));
};
exports.GET = GET;
const DELETE = async (request, { params }) => {
    const resource = params.resource;
    const _id = params.id;
    return Response.json(await (0, DbService_1.default)()
        .getCollection(resource)
        .findOneAndDelete({
        _id,
        _createdBy: (await (0, getNonNullUser_1.default)()).email
    }));
};
exports.DELETE = DELETE;
const PATCH = async (request, { params }) => {
    const resource = params.resource;
    const validator = DbModel_1.DbModel.shape[resource];
    const _id = params.id;
    const { _id: _, ...rest } = validator.parse(await request.json());
    return Response.json(await (0, DbService_1.default)()
        .getCollection(resource)
        .findOneAndUpdate({ _id, _createdBy: (await (0, getNonNullUser_1.default)()).email }, {
        $set: rest
    }));
};
exports.PATCH = PATCH;
