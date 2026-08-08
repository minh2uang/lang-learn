import React from "react";
import { IUser } from "../services/users/getCurrent";
interface IUserProviderProps {
    children: JSX.Element;
}
export declare const useGetUser: () => IUser;
declare const UserContextProvider: React.FC<IUserProviderProps>;
export default UserContextProvider;
//# sourceMappingURL=UserProvider.d.ts.map