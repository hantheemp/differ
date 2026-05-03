import registerCompareIpc from "./compare";
import registerDirectoryIpc from "./directory";

export function registerIpcHandlers() {
  registerCompareIpc()
  registerDirectoryIpc()
}
