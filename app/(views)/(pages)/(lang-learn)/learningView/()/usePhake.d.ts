/// <reference types="react" />
import { Select } from '@repo/shared-stuff/forms/TcSelectField';
declare const usePhake: () => {
    onClickSet: (setId: string) => void;
    onClickEdit: (setId: string) => void;
    onClickAddSet: () => void;
    sets: SetModel[];
    filteredSets: SetModel[];
    setSetGroup: import("react").Dispatch<import("react").SetStateAction<Select | undefined>>;
    setGroups: Select[];
    setGroup: Select | undefined;
};
export default usePhake;
//# sourceMappingURL=usePhake.d.ts.map