"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useForm_1 = __importDefault(require("@repo/shared-stuff/hooks/forms/useForm"));
const UserProvider_1 = require("@/app/setup/UserProvider");
const usePostRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/usePostRequest"));
const usePhake = () => {
    const { register, clearForm, handleSubmit, isSubmittable } = (0, useForm_1.default)({});
    const user = (0, UserProvider_1.useGetUser)();
    const createSet = (0, usePostRequest_1.default)('/dynamic/sets');
    const onClickCreateButton = handleSubmit(async (toSubmit) => {
        await createSet({
            ...toSubmit,
            _createdBy: user.email,
            revisedToday: 0,
            learnedToday: 0
        });
        clearForm();
    });
    return { onClickCreateButton, register, isSubmittable };
};
exports.default = usePhake;
