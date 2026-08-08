declare const usePhake: () => {
    onClickDelete: () => Promise<void>;
    register: <Key extends string | number | symbol>(key: Key) => {
        value: TarjetaGrupoModel;
        label: Key;
        error: TarjetaGrupoModel;
        isDirty: TarjetaGrupoModel;
        onChange: (newValue: TarjetaGrupoModel) => void;
        onBlur: () => void;
        onFocus: () => void;
    };
    isSubmitting: boolean;
    onClickUpdate: () => Promise<void>;
};
export default usePhake;
//# sourceMappingURL=usePhake.d.ts.map