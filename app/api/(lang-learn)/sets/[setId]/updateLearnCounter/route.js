"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const DbService_1 = __importDefault(require("@/app/services/DbService"));
const getMidnightTonight_1 = __importDefault(require("@/app/utils/getMidnightTonight"));
const POST = async (request, { params }) => {
    const { searchParams } = new URL(request.url);
    const isNew = searchParams.get('isNew')?.toLowerCase() === 'true';
    const set = await (0, DbService_1.default)()
        .getCollection('sets')
        .findOne({ _id: params.setId });
    if (!!!set) {
        return Response.json(null);
    }
    await (0, DbService_1.default)()
        .getCollection('sets')
        .findOneAndUpdate({ _id: params.setId }, {
        $set: (0, getMidnightTonight_1.default)().getTime() < set.lastLearnedTime?.getTime()
            ? {
                revisedToday: isNew ? set.revisedToday : set.revisedToday + 1,
                learnedToday: isNew ? set.learnedToday + 1 : set.learnedToday,
                lastLearnedTime: new Date()
            }
            : {
                revisedToday: 1,
                learnedToday: 1,
                lastLearnedTime: new Date()
            }
    });
    return Response.json(await (0, DbService_1.default)().getCollection('sets').findOne({ _id: params.setId }));
};
exports.POST = POST;
