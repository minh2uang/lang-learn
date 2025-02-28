import DbService from "@/app/services/DbService";

export const GET = async () => {
  const sets = await DbService().getCollection("sets").find().toArray();
  await DbService().getCollection("sets").drop();
  sets.forEach(async (set) => {
    await DbService()
      .getCollection("sets")
      .insertOne({
        ...set,
        _id: set._id.toString(),
      });
  });
  return Response.json(true);
};
