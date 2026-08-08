"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@/app/api/utils");
const dayjs_1 = __importDefault(require("dayjs"));
const supermemo_1 = require("supermemo");
const TIME_THRESHOLD = 22 * 60 * 60 * 1000; // 22 hours
exports.POST = (0, utils_1.genericFunction)(async (params, body) => {
    const tarjeta = await (0, utils_1.findOne)('tarjetas', { _id: params.id });
    if (!!!tarjeta) {
        return null;
    }
    const tarjetaGrupo = await (0, utils_1.findOne)('tarjetaGrupos', {
        _id: tarjeta._tarjetaGrupoId
    });
    if (!!!tarjetaGrupo) {
        return null;
    }
    const newReviewLog = (0, supermemo_1.supermemo)(tarjeta.reviewLog, body.score);
    const shouldReset = () => new Date().getTime() -
        tarjetaGrupo.learnSettings.lastActiveTime.getTime() >
        TIME_THRESHOLD;
    const isNewTarjeta = tarjeta.dueDate === null;
    await (0, utils_1.updateOne)('tarjetas', { _id: params.id }, {
        reviewLog: newReviewLog,
        dueDate: (0, dayjs_1.default)().add(newReviewLog.interval, 'days').toDate()
    });
    isNewTarjeta &&
        (await (0, utils_1.updateOne)('tarjetaGrupos', { _id: tarjetaGrupo._id }, {
            learnSettings: {
                ...tarjetaGrupo.learnSettings,
                learnedToday: shouldReset()
                    ? 1
                    : tarjetaGrupo.learnSettings.learnedToday + 1,
                lastActiveTime: new Date()
            }
        }));
    return (0, utils_1.findOne)('tarjetas', { _id: tarjeta._id });
});
