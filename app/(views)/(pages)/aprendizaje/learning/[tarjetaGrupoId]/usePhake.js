'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useGetRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/useGetRequest"));
const usePostRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/usePostRequest"));
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const usePhake = () => {
    // Form and server actions
    const { tarjetaGrupoId } = (0, navigation_1.useParams)();
    const router = (0, navigation_1.useRouter)();
    const { data: tarjeta, refetch: refetchTarjeta } = (0, useGetRequest_1.default)(`/aprendizaje/tarjetaGrupo/${tarjetaGrupoId}/getNextTarjeta`);
    const { data: tarjetaGrupo, refetch: refetchTarjetaGrupo } = (0, useGetRequest_1.default)(`/aprendizaje/tarjetaGrupo/${tarjetaGrupoId}`);
    const doLearnTarjeta = (0, usePostRequest_1.default)(`/aprendizaje/tarjeta/${tarjeta?._id}/learnTarjeta`);
    const [isRespuestaShown, setIsRespuestaShown] = (0, react_1.useState)(false);
    // Event handlers
    const onClickAScore = async (score) => {
        await doLearnTarjeta({ score });
        await refetchTarjeta();
        await refetchTarjetaGrupo();
        setIsRespuestaShown(false);
    };
    const onClickShowRespuesta = () => setIsRespuestaShown(true);
    return {
        onClickAScore,
        tarjeta,
        onClickShowRespuesta,
        isRespuestaShown,
        tarjetaGrupo
    };
};
exports.default = usePhake;
