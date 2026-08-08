declare const usePhake: () => {
    onClickDelete: () => Promise<void>;
    register: <Key extends string | number | symbol>(key: Key) => {
        value: SetModelClient;
        label: Key;
        error: SetModelClient;
        isDirty: SetModelClient;
        onChange: (newValue: SetModelClient) => void;
        onBlur: () => void;
        onFocus: () => void;
    };
    isSubmitting: boolean;
    onClickUpdate: () => Promise<void>;
};
export default usePhake;
//# sourceMappingURL=usePhake.d.ts.map