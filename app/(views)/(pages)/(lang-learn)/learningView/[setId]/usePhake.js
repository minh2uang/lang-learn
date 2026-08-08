"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMidnightToday = void 0;
const useForm_1 = __importDefault(require("@repo/shared-stuff/hooks/forms/useForm"));
const navigation_1 = require("next/navigation");
const usePatchRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/usePatchRequest"));
const useGetRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/useGetRequest"));
const react_1 = require("react");
const useDeleteRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/useDeleteRequest"));
const getMidnightToday = () => {
    const d = new Date();
    d.setHours(0, 0, 0);
    return d;
};
exports.getMidnightToday = getMidnightToday;
const useData = () => {
    const { setId } = (0, navigation_1.useParams)();
    const { data: card, refetch: getNextCard } = (0, useGetRequest_1.default)(`/cards/getNext/${setId}`);
    const { data: set, refetch: refetchSet } = (0, useGetRequest_1.default)(`/sets/${setId}`);
    const { learnedToday, revisedToday } = set;
    const { setValue, handleSubmit, formValues, register } = (0, useForm_1.default)({
        defaultValues: {
            currentCard: card ? { ...card, startDefault: 0, endDefault: 0 } : null,
            score: 0
        },
        validates: {}
    });
    (0, react_1.useEffect)(() => {
        setValue('currentCard', card ? { ...card, startDefault: 0, endDefault: 0 } : null);
    }, [card]);
    const updateCard = (0, usePatchRequest_1.default)(`/cards/${card?._id}/updateCard`);
    const deleteCard = (0, useDeleteRequest_1.default)(`/cards/${card?._id}`);
    const onClickSiguiente = handleSubmit(async ({ currentCard }) => {
        if (currentCard) {
            const { endDefault, startDefault, ...toPost } = currentCard;
            try {
                await updateCard({});
                await getNextCard();
                await refetchSet();
            }
            catch (err) {
                throw err;
            }
        }
    });
    const onClickSave = async () => {
        const doSubmit = handleSubmit(async ({ currentCard }) => {
            if (currentCard) {
                const newCard = {
                    ...currentCard
                };
                try {
                    const { startDefault, endDefault, ...rest } = newCard;
                    await updateCard(newCard);
                    setValue('currentCard', newCard);
                }
                catch (err) {
                    throw err;
                }
            }
        });
        return doSubmit();
    };
    const onClickDelete = handleSubmit(async ({ currentCard }) => {
        if (currentCard) {
            try {
                await deleteCard();
                await getNextCard();
            }
            catch (err) {
                throw err;
            }
        }
    });
    return {
        onClickDelete,
        onClickSave,
        onClickSiguiente,
        register,
        currentCard: formValues?.currentCard,
        learnedToday,
        revisedToday
    };
};
exports.default = useData;
