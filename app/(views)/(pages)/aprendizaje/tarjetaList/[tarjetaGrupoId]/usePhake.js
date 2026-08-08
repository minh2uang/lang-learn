'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useGetRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/useGetRequest"));
const navigation_1 = require("next/navigation");
const usePhake = () => {
    // prepare data
    const { data: tarjetaArray } = (0, useGetRequest_1.default)('/aprendizaje/tarjeta');
    const { tarjetaGrupoId } = (0, navigation_1.useParams)();
    const tarjetaArrayByList = tarjetaArray.filter((i) => i._tarjetaGrupoId === tarjetaGrupoId);
    return { tarjetaArrayByList };
};
exports.default = usePhake;
