"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useForm_1 = __importDefault(require("@repo/shared-stuff/hooks/forms/useForm"));
const navigation_1 = require("next/navigation");
const useDeleteRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/useDeleteRequest"));
const useGetRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/useGetRequest"));
const usePatchRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/usePatchRequest"));
const usePhake = () => {
    const { tarjetaGrupoId } = (0, navigation_1.useParams)();
    const { data: tarjetaGrupo } = (0, useGetRequest_1.default)(`/aprendizaje/tarjetaGrupo/${tarjetaGrupoId}`);
    const { register, handleSubmit, isSubmitting, formValues } = (0, useForm_1.default)({
        defaultValues: tarjetaGrupo
    });
    const doDeleteTarjetaGrupo = (0, useDeleteRequest_1.default)(`/aprendizaje/tarjetaGrupo/${tarjetaGrupoId}`);
    const doPatchTarjetaGrupo = (0, usePatchRequest_1.default)(`/aprendizaje/tarjetaGrupo/${tarjetaGrupoId}`);
    const router = (0, navigation_1.useRouter)();
    const onClickDelete = handleSubmit(async () => {
        await doDeleteTarjetaGrupo();
        router.push(`/`);
    });
    const onClickUpdate = handleSubmit(async () => await doPatchTarjetaGrupo(formValues));
    return { onClickDelete, register, isSubmitting, onClickUpdate };
};
exports.default = usePhake;
