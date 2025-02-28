"use server";
import { MongoClient, WithId } from "mongodb";
import CardModel from "../models/CardModel";
import SetModel from "../models/SetModel";
import UserModel from "../models/UserModel";

// Connection URL
const url = process.env.DATABASE_CONNECTION_STRING || "";
const client = new MongoClient(url);
const db_name = process.env.DB_NAME || "";
// Database Name

const DbService = () => {
  const db = client.db(db_name);
  const getCollection = <CollectionName extends keyof LangLearnDatabase>(
    collectionName: CollectionName
  ) => {
    type ItemType = LangLearnDatabase[CollectionName];
    const collection = db.collection<ItemType>(collectionName);
    return collection;
  };
  return { getCollection };
};

export interface LangLearnDatabase {
  cards: CardModel;
  sets: SetModel;
  users: UserModel;
}
export default DbService;
