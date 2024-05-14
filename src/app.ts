import { yarg } from "./config/plugins/yargs.plugins";
import { ServerApp } from "./presentation/server-app";

(async () => {
  // console.log(yarg)
  const { b: base, l: limit, s: showTable , d :destination , n:name } = yarg;
  ServerApp.run({ base, limit, showTable ,destination , name});
})();
