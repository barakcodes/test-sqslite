import { create, builder, ZodValidator } from "@barakcodes/sqslite/queue";
import { z } from "zod";
import { sqlite } from "./db";

export const defaultQueue = create({
  db: sqlite,
  name: "default",
  options: {
    maxRetries: 5,
  },
});

const eventBuilder = builder({
  validator: ZodValidator,
});

export const testEvent = eventBuilder(
  "app.other",
  z.object({
    foo: z.string(),
  }),
);
