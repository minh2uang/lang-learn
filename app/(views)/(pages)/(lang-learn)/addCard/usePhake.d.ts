import CardModel from '@/app/models/lang-learn/CardModel';
import SetModel from '@/app/models/lang-learn/SetModel';
type Form = {
    card: CardModel & {
        readonly startDefault: number;
        readonly endDefault: number;
    };
    videoId: string;
    set: SetModel;
};
declare const useData: () => {
    doCreateCard: () => Promise<void>;
    card: any;
    sets: SetModel[];
    setValue: <Key extends keyof Form>(key: Key, newValue: Form[Key]) => void;
    submitting: boolean;
    register: <Key_1 extends keyof Form>(key: Key_1) => {
        value: Partial<Form>[Key_1];
        label: Key_1;
        error: Partial<import("@repo/shared-stuff/hooks/forms/useForm").Stringify<Form>>[Key_1];
        isDirty: Partial<import("@repo/shared-stuff/hooks/forms/useForm").Booleanise<Form>>[Key_1];
        onChange: (newValue: Form[Key_1]) => void;
        onBlur: () => void;
        onFocus: () => void;
    };
    registerVideoIdField: () => {
        onChange: (newValue: string) => void;
        value: string | undefined;
        label: "videoId";
        error: string | undefined;
        isDirty: boolean | undefined;
        onBlur: () => void;
        onFocus: () => void;
    };
};
export default useData;
//# sourceMappingURL=usePhake.d.ts.map