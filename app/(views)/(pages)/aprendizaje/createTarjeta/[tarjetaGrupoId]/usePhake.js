'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useForm_1 = __importDefault(require("@repo/shared-stuff/hooks/forms/useForm"));
const usePostRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/usePostRequest"));
const navigation_1 = require("next/navigation");
const usePhake = () => {
    // Prepare form and api functions
    const { tarjetaGrupoId } = (0, navigation_1.useParams)();
    const form = (0, useForm_1.default)({});
    const doCreateTarjeta = (0, usePostRequest_1.default)(`/aprendizaje/tarjeta`);
    // Event handlers
    const onClickCreate = form.handleSubmit(async () => {
        await doCreateTarjeta({
            fieldsModel: form.formValues,
            _tarjetaGrupoId: tarjetaGrupoId
        });
        form.clearForm();
    });
    return { onClickCreate, form, doCreateTarjeta };
};
exports.default = usePhake;
