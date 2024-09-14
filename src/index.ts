import { intiServer } from "./app";

async function init() {
  const server = await intiServer();

  server.listen(8000, () => console.log(`server started at port:8000`));
}

init();
