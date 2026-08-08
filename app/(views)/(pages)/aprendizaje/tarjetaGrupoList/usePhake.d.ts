declare const usePhake: () => {
    onClickTarjetaGrupo: (tarjetaGrupoId: string) => void;
    onClickEdit: (tarjetaGrupoId: string) => void;
    onClickAddTarjetaGrupo: () => void;
    tarjetaGrupos: TarjetaGrupoModel[];
    onClickAddTarjetas: (tarjetaGrupoId: string) => void;
    onClickViewTarjetas: (tarjetaGrupoId: string) => void;
};
export default usePhake;
//# sourceMappingURL=usePhake.d.ts.map