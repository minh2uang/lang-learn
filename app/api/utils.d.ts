import { Filter, FindOptions } from 'mongodb';
import { Database } from '../services/DbService';
export declare const genericFunction: <PathParamType, BodyType>(doSomething: (params: PathParamType, body: BodyType) => Promise<any>) => (request: Request, { params }: {
    params: PathParamType;
}) => Promise<Response>;
export declare const findOne: <CollectionName extends "sets" | "tarjetaGrupos" | "cards" | "tarjetas">(collectionName: CollectionName, query: Filter<{
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
}[CollectionName]>, options?: FindOptions) => Promise<{
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
}[CollectionName] | null>;
export declare const findMany: <CollectionName extends "sets" | "tarjetaGrupos" | "cards" | "tarjetas">(collectionName: CollectionName, query: Filter<{
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
}[CollectionName]>) => Promise<import("mongodb").WithId<{
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
}[CollectionName]>[]>;
export declare const updateOne: <CollectionName extends "sets" | "tarjetaGrupos" | "cards" | "tarjetas">(collectionName: CollectionName, filter: Filter<{
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
}[CollectionName]>, update: Partial<{
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
}[CollectionName]>) => Promise<import("mongodb").UpdateResult<{
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
}[CollectionName]>>;
export declare const createOne: <CollectionName extends "sets" | "tarjetaGrupos" | "cards" | "tarjetas">(collectionName: CollectionName, newItem: {
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
}[CollectionName]) => Promise<import("mongodb").InsertOneResult<{
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
}[CollectionName]>>;
export declare const deleteOne: <CollectionName extends "sets" | "tarjetaGrupos" | "cards" | "tarjetas">(collectionName: CollectionName, filter: Filter<{
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
}[CollectionName]>) => Promise<import("mongodb").DeleteResult>;
export declare const deleteMany: <CollectionName extends "sets" | "tarjetaGrupos" | "cards" | "tarjetas">(collectionName: CollectionName, filter: Filter<{
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
}[CollectionName]>) => Promise<import("mongodb").DeleteResult>;
//# sourceMappingURL=utils.d.ts.map