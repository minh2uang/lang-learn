import { z } from 'zod';
declare const TarjetaModel: z.ZodObject<{
    _id: z.ZodEffects<z.ZodType<string | undefined, z.ZodTypeDef, string | undefined>, string, string | undefined>;
    _createdBy: z.ZodString;
    _createdAt: z.ZodDefault<z.ZodDate>;
    _tarjetaGrupoId: z.ZodString;
    fieldsModel: z.ZodObject<{
        pregunta: z.ZodString;
        respuesta: z.ZodString;
        type: z.ZodDefault<z.ZodLiteral<"default">>;
    }, "strip", z.ZodTypeAny, {
        type: "default";
        pregunta: string;
        respuesta: string;
    }, {
        pregunta: string;
        respuesta: string;
        type?: "default" | undefined;
    }>;
    reviewLog: z.ZodDefault<z.ZodObject<{
        interval: z.ZodNumber;
        efactor: z.ZodNumber;
        repetition: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        interval: number;
        efactor: number;
        repetition: number;
    }, {
        interval: number;
        efactor: number;
        repetition: number;
    }>>;
    dueDate: z.ZodDefault<z.ZodNullable<z.ZodDate>>;
}, "strip", z.ZodTypeAny, {
    fieldsModel: {
        type: "default";
        pregunta: string;
        respuesta: string;
    };
    dueDate: Date | null;
    _id: string;
    _createdBy: string;
    _createdAt: Date;
    _tarjetaGrupoId: string;
    reviewLog: {
        interval: number;
        efactor: number;
        repetition: number;
    };
}, {
    fieldsModel: {
        pregunta: string;
        respuesta: string;
        type?: "default" | undefined;
    };
    _createdBy: string;
    _tarjetaGrupoId: string;
    dueDate?: Date | null | undefined;
    _id?: string | undefined;
    _createdAt?: Date | undefined;
    reviewLog?: {
        interval: number;
        efactor: number;
        repetition: number;
    } | undefined;
}>;
type TarjetaModel = z.infer<typeof TarjetaModel>;
export type CardModelClient = z.input<typeof TarjetaModel>;
export default TarjetaModel;
//# sourceMappingURL=TarjetaModel.d.ts.map