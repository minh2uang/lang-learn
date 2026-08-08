'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useGetRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/useGetRequest"));
const navigation_1 = require("next/navigation");
const usePhake = () => {
    const router = (0, navigation_1.useRouter)();
    const { data: tarjetaGrupos } = (0, useGetRequest_1.default)('/aprendizaje/tarjetaGrupo');
    const onClickTarjetaGrupo = (tarjetaGrupoId) => router.push(`/aprendizaje/learning/${tarjetaGrupoId}`);
    const onClickEdit = (tarjetaGrupoId) => router.push(`/aprendizaje/editTarjetaGrupo/${tarjetaGrupoId}`);
    const onClickAddTarjetaGrupo = () => router.push('/aprendizaje/createTarjetaGrupo');
    const onClickAddTarjetas = (tarjetaGrupoId) => router.push(`/aprendizaje/createTarjeta/${tarjetaGrupoId}`);
    const onClickViewTarjetas = (tarjetaGrupoId) => router.push(`/aprendizaje/tarjetaList/${tarjetaGrupoId}`);
    return {
        onClickTarjetaGrupo,
        onClickEdit,
        onClickAddTarjetaGrupo,
        tarjetaGrupos,
        onClickAddTarjetas,
        onClickViewTarjetas
    };
};
exports.default = usePhake;
