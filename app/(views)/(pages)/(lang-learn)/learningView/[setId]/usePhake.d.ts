import CardModel from '@/app/models/lang-learn/CardModel';
export declare const getMidnightToday: () => Date;
interface Form {
    score: number;
    currentCard: (CardModel & {
        startDefault: number;
        endDefault: number;
    }) | null;
}
declare const useData: () => {
    onClickDelete: () => Promise<void>;
    onClickSave: () => Promise<void>;
    onClickSiguiente: () => Promise<void>;
    register: <Key extends keyof Form>(key: Key) => {
        value: Partial<Form>[Key];
        label: Key;
        error: Partial<import("@repo/shared-stuff/hooks/forms/useForm").Stringify<Form>>[Key];
        isDirty: Partial<import("@repo/shared-stuff/hooks/forms/useForm").Booleanise<Form>>[Key];
        onChange: (newValue: Form[Key]) => void;
        onBlur: () => void;
        onFocus: () => void;
    };
    currentCard: any;
    learnedToday: SetModel;
    revisedToday: SetModel;
};
export default useData;
//# sourceMappingURL=usePhake.d.ts.map