import { z } from "zod";
import CardModel from "./CardModel";
import SetModel from "./SetModel";

export const DbModel = z.object({
  cards: CardModel,
  sets: SetModel,
});

export type DbModel = z.infer<typeof DbModel>;
