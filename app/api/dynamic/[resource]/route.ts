import { DbModel } from "@/app/models/DbModel";
import DbService, { LangLearnDatabase } from "@/app/services/DbService";
import { ObjectId } from "mongodb";

export const GET = async (
  request: Request,
  { params }: { params: { resource: string } }
) => {
  const resource: keyof DbModel = params.resource as keyof DbModel;
  return Response.json(
    await DbService().getCollection(resource).find({}).toArray()
  );
};

export const POST = async (
  request: Request,
  { params }: { params: { resource: string } }
) => {
  const resource: keyof DbModel = params.resource as keyof DbModel;
  const validator = DbModel.shape[resource];

  const body = await request.json();
  const parsed = validator.parse(body);
  return Response.json(
    await DbService().getCollection(resource).insertOne(parsed)
  );
};
