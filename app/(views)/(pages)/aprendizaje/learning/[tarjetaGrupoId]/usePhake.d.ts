declare const usePhake: () => {
    onClickAScore: (score: 1 | 2 | 3 | 4 | 5) => Promise<void>;
    tarjeta: any;
    onClickShowRespuesta: () => void;
    isRespuestaShown: boolean;
    tarjetaGrupo: TarjetaGrupoModel;
};
export default usePhake;
//# sourceMappingURL=usePhake.d.ts.map