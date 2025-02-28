import { ObjectId } from "mongodb";
import { z } from "zod";

export const DocumentId = z
  .custom<string | undefined>(() => true)
  .transform((i) =>
    i ? new ObjectId(i).toString() : new ObjectId().toString()
  );
