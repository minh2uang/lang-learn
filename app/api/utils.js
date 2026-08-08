"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMany = exports.deleteOne = exports.createOne = exports.updateOne = exports.findMany = exports.findOne = exports.genericFunction = void 0;
const DbService_1 = __importDefault(require("../services/DbService"));
const getNonNullUser_1 = __importDefault(require("../services/users/getNonNullUser"));
const DbModel_1 = require("../models/DbModel");
const genericFunction = (doSomething) => async (request, { params }) => {
    let body = null;
    try {
        body = await request.json();
    }
    catch (e) {
    }
    finally {
        return Response.json(await doSomething(params, body));
    }
};
exports.genericFunction = genericFunction;
const findOne = async (collectionName, query, options) => await (0, DbService_1.default)()
    .getCollection(collectionName)
    .findOne({ ...query, _createdBy: getNonNullUser_1.default }, options);
exports.findOne = findOne;
const findMany = async (collectionName, query) => await (0, DbService_1.default)()
    .getCollection(collectionName)
    .find({ ...query, _createdBy: getNonNullUser_1.default })
    .toArray();
exports.findMany = findMany;
const updateOne = async (collectionName, filter, update) => {
    const validator = DbModel_1.DbModel.shape[collectionName];
    const { _id, ...rest } = validator.partial().parse(update);
    return await (0, DbService_1.default)()
        .getCollection(collectionName)
        .updateOne({ ...filter, _createdBy: getNonNullUser_1.default }, { $set: rest });
};
exports.updateOne = updateOne;
const createOne = async (collectionName, newItem) => {
    const validator = DbModel_1.DbModel.shape[collectionName];
    const parsed = validator.parse({
        ...newItem,
        _createdBy: (await (0, getNonNullUser_1.default)()).email
    });
    return await (0, DbService_1.default)().getCollection(collectionName).insertOne(parsed);
};
exports.createOne = createOne;
const deleteOne = async (collectionName, filter) => await (0, DbService_1.default)()
    .getCollection(collectionName)
    .deleteOne({ ...filter, _createdBy: getNonNullUser_1.default });
exports.deleteOne = deleteOne;
const deleteMany = async (collectionName, filter) => await (0, DbService_1.default)()
    .getCollection(collectionName)
    .deleteMany({ ...filter, _createdBy: getNonNullUser_1.default });
exports.deleteMany = deleteMany;
