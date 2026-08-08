"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useForm_1 = __importDefault(require("@repo/shared-stuff/hooks/forms/useForm"));
const dayjs_1 = __importDefault(require("dayjs"));
const UserProvider_1 = require("@/app/setup/UserProvider");
const useGetRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/useGetRequest"));
const usePostRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/usePostRequest"));
const useData = () => {
    const [submitting, setSubmitting] = (0, react_1.useState)(false);
    const user = (0, UserProvider_1.useGetUser)();
    const { formValues, setValue, register } = (0, useForm_1.default)({
        defaultValues: {
            card: {
                start: 0,
                end: 10,
                videoId: '',
                startDefault: 0,
                endDefault: 10,
                nivel: 0,
                dueDate: new Date(),
                _setId: '',
                _id: '',
                _createdBy: user.email
            },
            videoId: ''
        },
        validates: {}
    });
    const { videoId, end, start } = formValues.card;
    const { data: sets } = (0, useGetRequest_1.default)('/dynamic/sets');
    const createCard = (0, usePostRequest_1.default)('/dynamic/cards');
    const doCreateCard = async () => {
        if (user) {
            try {
                setSubmitting(true);
                if (!!!videoId) {
                    throw new Error('Not valid');
                }
                const toInsert = {
                    start,
                    end,
                    videoId,
                    dueDate: (0, dayjs_1.default)(new Date())
                        .add(-1, 'days')
                        .set('hour', 0)
                        .set('minute', 0)
                        .set('second', 0)
                        .set('millisecond', 0)
                        .toDate(),
                    nivel: 0,
                    _setId: formValues.set._id,
                    _createdBy: user.email,
                    _id: ''
                };
                await createCard(toInsert);
                setValue('card', {
                    ...formValues.card,
                    start: end,
                    end: end + 3
                });
            }
            catch (err) {
                console.log(err);
                alert('Failed!!!');
            }
            finally {
                setSubmitting(false);
            }
        }
    };
    const registerVideoIdField = () => ({
        ...register('videoId'),
        onChange: (newValue) => {
            register('videoId').onChange(newValue);
            setValue('card', { ...formValues.card, videoId: newValue });
        }
    });
    return {
        doCreateCard,
        card: formValues.card,
        sets,
        setValue,
        submitting,
        register,
        registerVideoIdField
    };
};
exports.default = useData;
