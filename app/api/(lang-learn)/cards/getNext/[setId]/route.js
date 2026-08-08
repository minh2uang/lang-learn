"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const DbService_1 = __importDefault(require("@/app/services/DbService"));
const getNonNullUser_1 = __importDefault(require("@/app/services/users/getNonNullUser"));
const dayjs_1 = __importDefault(require("dayjs"));
const GET = async (_, { params: { setId } }) => {
    const cardsCollection = (0, DbService_1.default)().getCollection('cards');
    try {
        let card = await cardsCollection.findOne({
            _setId: setId,
            _createdBy: (await (0, getNonNullUser_1.default)()).email,
            nivel: { $lt: 5 },
            dueDate: { $lt: (0, dayjs_1.default)().toDate() }
        }, {
            sort: [
                ['nivel', 'desc'],
                ['start', 'asc']
            ]
        });
        return Response.json(card && {
            ...card,
            _id: card._id.toString(),
            _setId: card._setId.toString(),
            startDefault: card.start,
            endDefault: card.end
        });
    }
    catch (e) {
        throw e;
    }
};
exports.GET = GET;
