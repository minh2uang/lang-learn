"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const DbModel_1 = require("@/app/models/DbModel");
const DbService_1 = __importDefault(require("@/app/services/DbService"));
const getNonNullUser_1 = __importDefault(require("@/app/services/users/getNonNullUser"));
const GET = async (request, { params }) => {
    const resource = params.resource;
    return Response.json(await (0, DbService_1.default)()
        .getCollection(resource)
        .find({ _createdBy: (await (0, getNonNullUser_1.default)()).email })
        .toArray());
};
exports.GET = GET;
const POST = async (request, { params }) => {
    const resource = params.resource;
    const validator = DbModel_1.DbModel.shape[resource];
    const body = await request.json();
    const parsed = validator.parse(body);
    return Response.json(await (0, DbService_1.default)().getCollection(resource).insertOne(parsed));
};
exports.POST = POST;
