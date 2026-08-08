import { z } from 'zod';
declare const SetModel: z.ZodObject<{
    _id: z.ZodEffects<z.ZodType<string | undefined, z.ZodTypeDef, string | undefined>, string, string | undefined>;
    _createdBy: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    revisedToday: z.ZodDefault<z.ZodNumber>;
    learnedToday: z.ZodDefault<z.ZodNumber>;
    lastLearnedTime: z.ZodDefault<z.ZodEffects<z.ZodString, Date, string>>;
    isHidden: z.ZodOptional<z.ZodBoolean>;
    setGroup: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    learnedToday: number;
    revisedToday: number;
    _id: string;
    _createdBy: string;
    lastLearnedTime: Date;
    description?: string | undefined;
    setGroup?: string | undefined;
    isHidden?: boolean | undefined;
}, {
    name: string;
    _createdBy: string;
    description?: string | undefined;
    setGroup?: string | undefined;
    learnedToday?: number | undefined;
    revisedToday?: number | undefined;
    _id?: string | undefined;
    lastLearnedTime?: string | undefined;
    isHidden?: boolean | undefined;
}>;
type SetModel = z.infer<typeof SetModel>;
export type SetModelClient = z.input<typeof SetModel>;
export default SetModel;
//# sourceMappingURL=SetModel.d.ts.map