import { redirect } from "next/navigation";
import { auth } from "./firebaseAuthen";

type Props = {
  children: JSX.Element;
};

const Authentication = ({ children }: Props) => {
  const userId = auth.currentUser?.uid;
  return userId ? children : redirect("/login");
};

export default Authentication;
