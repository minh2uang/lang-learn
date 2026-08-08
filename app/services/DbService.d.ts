import { DbModel } from '../models/DbModel';
declare const DbService: () => {
    getCollection: <CollectionName extends "sets" | "tarjetaGrupos" | "cards" | "tarjetas">(collectionName: CollectionName) => import("mongodb").Collection<{
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
    }[CollectionName]>;
};
export type Database = DbModel;
export default DbService;
//# sourceMappingURL=DbService.d.ts.map