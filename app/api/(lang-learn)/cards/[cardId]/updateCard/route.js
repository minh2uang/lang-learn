"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATCH = void 0;
const DbService_1 = __importDefault(require("@/app/services/DbService"));
const getMidnightTonight_1 = __importDefault(require("@/app/utils/getMidnightTonight"));
const dayjs_1 = __importDefault(require("dayjs"));
const getNivel = (nivel) => nivel > 5 ? 5 : nivel < 0 ? 0 : nivel;
const PATCH = async (request, { params }) => {
    const card = await (0, DbService_1.default)()
        .getCollection('cards')
        .findOne({ _id: params.cardId });
    const set = await (0, DbService_1.default)()
        .getCollection('sets')
        .findOne({ _id: card?._setId });
    if (!!!card || !!!set) {
        return Response.json(null);
    }
    await (0, DbService_1.default)()
        .getCollection('cards')
        .findOneAndUpdate({ _id: params.cardId }, {
        $set: {
            nivel: getNivel(card.nivel + 1),
            start: card.start,
            end: card.end,
            dueDate: card.nivel + 1 <= 5 ? (0, dayjs_1.default)().add(20, 'hours').toDate() : null
        }
    });
    await (0, DbService_1.default)()
        .getCollection('sets')
        .findOneAndUpdate({ _id: card._setId }, {
        $set: (0, getMidnightTonight_1.default)().getTime() < set.lastLearnedTime?.getTime()
            ? {
                revisedToday: card.nivel === 0 ? set.revisedToday : set.revisedToday + 1,
                learnedToday: card.nivel === 0 ? set.learnedToday + 1 : set.learnedToday,
                lastLearnedTime: new Date()
            }
            : {
                revisedToday: card.nivel === 0 ? 0 : 1,
                learnedToday: card.nivel === 0 ? 1 : 0,
                lastLearnedTime: new Date()
            }
    });
    return Response.json(await (0, DbService_1.default)().getCollection('cards').findOne({ _id: params.cardId }));
};
exports.PATCH = PATCH;
