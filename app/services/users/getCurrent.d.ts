export interface IUser {
    email: string;
}
export interface ISession {
    user?: {
        email: string;
    };
    expires?: string;
}
declare const usersGetCurrentService: ({}: {}) => Promise<IUser | null>;
export default usersGetCurrentService;
//# sourceMappingURL=getCurrent.d.ts.map