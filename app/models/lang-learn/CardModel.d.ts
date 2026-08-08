import { z } from 'zod';
declare const CardModel: z.ZodObject<{
    start: z.ZodNumber;
    end: z.ZodNumber;
    videoId: z.ZodString;
    dueDate: z.ZodEffects<z.ZodNullable<z.ZodString>, Date | null, string | null>;
    nivel: z.ZodNumber;
    _setId: z.ZodEffects<z.ZodType<string | undefined, z.ZodTypeDef, string | undefined>, string, string | undefined>;
    _id: z.ZodEffects<z.ZodType<string | undefined, z.ZodTypeDef, string | undefined>, string, string | undefined>;
    _createdBy: z.ZodString;
}, "strip", z.ZodTypeAny, {
    end: number;
    start: number;
    videoId: string;
    dueDate: Date | null;
    nivel: number;
    _setId: string;
    _id: string;
    _createdBy: string;
}, {
    end: number;
    start: number;
    videoId: string;
    dueDate: string | null;
    nivel: number;
    _createdBy: string;
    _setId?: string | undefined;
    _id?: string | undefined;
}>;
type CardModel = z.infer<typeof CardModel>;
export type CardModelClient = z.input<typeof CardModel>;
export default CardModel;
//# sourceMappingURL=CardModel.d.ts.map