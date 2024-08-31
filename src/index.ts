import { Hono } from "hono";
import { defaultQueue, testEvent } from "./queue";

const app = new Hono();

app.get("/", async (c) => {
  await defaultQueue.publish(testEvent, {
    foo: "bar",
  });
  return c.text("Hello Hono!");
});

export default app;
