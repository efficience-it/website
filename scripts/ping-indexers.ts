import { run } from "./lib/ping-indexers";

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
