"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useForm_1 = __importDefault(require("@repo/shared-stuff/hooks/forms/useForm"));
const navigation_1 = require("next/navigation");
const usePostRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/usePostRequest"));
const usePhake = () => {
    const router = (0, navigation_1.useRouter)();
    const { register, handleSubmit, isSubmitting, formValues, clearForm } = (0, useForm_1.default)({});
    const doCreateTarjetaGrupo = (0, usePostRequest_1.default)(`/aprendizaje/tarjetaGrupo`);
    const onClickCreate = handleSubmit(async () => {
        await doCreateTarjetaGrupo(formValues);
        clearForm();
    });
    return { onClickCreate, register, isSubmitting };
};
exports.default = usePhake;
