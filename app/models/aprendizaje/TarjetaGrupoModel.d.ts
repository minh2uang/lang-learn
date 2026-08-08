import { z } from 'zod';
declare const SetModel: z.ZodObject<{
    _id: z.ZodEffects<z.ZodType<string | undefined, z.ZodTypeDef, string | undefined>, string, string | undefined>;
    _createdBy: z.ZodString;
    name: z.ZodString;
    learnSettings: z.ZodDefault<z.ZodObject<{
        learnedToday: z.ZodNumber;
        learnedTarget: z.ZodNumber;
        reviewedToday: z.ZodNumber;
        reviewedTarget: z.ZodNumber;
        lastActiveTime: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        learnedToday: number;
        learnedTarget: number;
        reviewedToday: number;
        reviewedTarget: number;
        lastActiveTime: Date;
    }, {
        learnedToday: number;
        learnedTarget: number;
        reviewedToday: number;
        reviewedTarget: number;
        lastActiveTime: Date;
    }>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    _id: string;
    _createdBy: string;
    learnSettings: {
        learnedToday: number;
        learnedTarget: number;
        reviewedToday: number;
        reviewedTarget: number;
        lastActiveTime: Date;
    };
}, {
    name: string;
    _createdBy: string;
    _id?: string | undefined;
    learnSettings?: {
        learnedToday: number;
        learnedTarget: number;
        reviewedToday: number;
        reviewedTarget: number;
        lastActiveTime: Date;
    } | undefined;
}>;
type SetModel = z.infer<typeof SetModel>;
export type SetModelClient = z.input<typeof SetModel>;
export default SetModel;
//# sourceMappingURL=TarjetaGrupoModel.d.ts.map