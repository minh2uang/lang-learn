import usersGetCurrentService from "./getCurrent";

const getNonNullUser = async () => {
  const user = await usersGetCurrentService({});
  if (user === null) {
    throw "User is null";
  }
  return user;
};

export default getNonNullUser;
