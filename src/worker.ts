import { defaultQueue, testEvent } from "./queue";

defaultQueue.handle([testEvent], async (event) => {
  console.log(event);
});
