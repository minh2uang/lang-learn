"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useForm_1 = __importDefault(require("@repo/shared-stuff/hooks/forms/useForm"));
const navigation_1 = require("next/navigation");
const useDeleteRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/useDeleteRequest"));
const useGetRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/useGetRequest"));
const usePatchRequest_1 = __importDefault(require("@repo/shared-stuff/hooks/queries/usePatchRequest"));
const usePhake = () => {
    const { setId } = (0, navigation_1.useParams)();
    const { data: set } = (0, useGetRequest_1.default)(`/dynamic/sets/${setId}`);
    const { register, handleSubmit, isSubmitting, formValues } = (0, useForm_1.default)({
        defaultValues: set
    });
    const doDeleteSet = (0, useDeleteRequest_1.default)(`/dynamic/sets/${setId}`);
    const doPatchSet = (0, usePatchRequest_1.default)(`/dynamic/sets/${setId}`);
    const router = (0, navigation_1.useRouter)();
    const onClickDelete = handleSubmit(async () => {
        await doDeleteSet();
        router.push(`/`);
    });
    const onClickUpdate = handleSubmit(async () => await doPatchSet(formValues));
    return { onClickDelete, register, isSubmitting, onClickUpdate };
};
exports.default = usePhake;
