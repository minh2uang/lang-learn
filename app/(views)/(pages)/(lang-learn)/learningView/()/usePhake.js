"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const navigation_1 = require("next/navigation");
const useGetRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/useGetRequest"));
const react_1 = require("react");
const usePhake = () => {
    const [setGroup, setSetGroup] = (0, react_1.useState)();
    const router = (0, navigation_1.useRouter)();
    const { data: sets } = (0, useGetRequest_1.default)('/dynamic/sets');
    const onClickSet = (setId) => router.push(`/learningView/${setId}`);
    const onClickEdit = (setId) => router.push(`/editSet/${setId}`);
    const onClickAddSet = () => router.push('/addSet');
    const filteredSets = !!setGroup
        ? sets.filter((set) => set.setGroup === setGroup?._id)
        : sets;
    const setGroups = [
        ...new Set(sets.map((set) => set.setGroup || ''))
    ].map((setGroup) => ({ _id: setGroup, name: setGroup || '(Blank)' }));
    return {
        onClickSet,
        onClickEdit,
        onClickAddSet,
        sets,
        filteredSets,
        setSetGroup,
        setGroups,
        setGroup
    };
};
exports.default = usePhake;
