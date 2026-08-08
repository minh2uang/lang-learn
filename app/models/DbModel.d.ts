import { z } from 'zod';
export declare const DbModel: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{}, {
    cards: z.ZodObject<{
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
    sets: z.ZodObject<{
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
}>, {
    tarjetas: z.ZodObject<{
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
    tarjetaGrupos: z.ZodObject<{
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
}>, "strip", z.ZodTypeAny, {
    sets: {
        name: string;
        learnedToday: number;
        revisedToday: number;
        _id: string;
        _createdBy: string;
        lastLearnedTime: Date;
        description?: string | undefined;
        setGroup?: string | undefined;
        isHidden?: boolean | undefined;
    };
    tarjetaGrupos: {
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
    };
    cards: {
        end: number;
        start: number;
        videoId: string;
        dueDate: Date | null;
        nivel: number;
        _setId: string;
        _id: string;
        _createdBy: string;
    };
    tarjetas: {
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
    };
}, {
    sets: {
        name: string;
        _createdBy: string;
        description?: string | undefined;
        setGroup?: string | undefined;
        learnedToday?: number | undefined;
        revisedToday?: number | undefined;
        _id?: string | undefined;
        lastLearnedTime?: string | undefined;
        isHidden?: boolean | undefined;
    };
    tarjetaGrupos: {
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
    };
    cards: {
        end: number;
        start: number;
        videoId: string;
        dueDate: string | null;
        nivel: number;
        _createdBy: string;
        _setId?: string | undefined;
        _id?: string | undefined;
    };
    tarjetas: {
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
    };
}>;
export type DbModel = z.infer<typeof DbModel>;
//# sourceMappingURL=DbModel.d.ts.map