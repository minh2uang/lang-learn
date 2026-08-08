interface Form {
    name: string;
    description: string;
}
declare const usePhake: () => {
    onClickCreateButton: () => Promise<void>;
    register: <Key extends keyof Form>(key: Key) => {
        value: Partial<Form>[Key];
        label: Key;
        error: Partial<import("@repo/shared-stuff/hooks/forms/useForm").Stringify<Form>>[Key];
        isDirty: Partial<import("@repo/shared-stuff/hooks/forms/useForm").Booleanise<Form>>[Key];
        onChange: (newValue: Form[Key]) => void;
        onBlur: () => void;
        onFocus: () => void;
    };
    isSubmittable: boolean;
};
export default usePhake;
//# sourceMappingURL=usePhake.d.ts.map