import React, { createContext, useContext, useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import usersGetCurrentService, {
  ISession,
  IUser,
} from "../services/users/getCurrent";

interface IUserProviderProps {
  children: JSX.Element;
}

const UserContext = createContext<IUser>({ email: "" });
export const useGetUser: () => IUser = () => useContext(UserContext);

const UserContextProvider: React.FC<IUserProviderProps> = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState<string>("loading");
  const [user, setUser] = useState<IUser | null>(null);
  const router = useRouter();
  useEffect(() => {
    const doGetSession = async () => {
      const user = await usersGetCurrentService({});
      if (user === null) {
        setLoginStatus("notAuthenticated");
        return;
      }
      setLoginStatus("authenticated");
      setUser(user);
      return;
    };
    void doGetSession();
  }, []);

  switch (loginStatus) {
    case "loading":
      return <>Trying to verify your identity</>;
    case "notAuthenticated":
      router.push("/api/auth/signin");
      return <>Redirecting</>;
    case "authenticated":
      return (
        <UserContext.Provider value={user as IUser}>
          {children}
        </UserContext.Provider>
      );
  }
};
export default UserContextProvider;
