import registerCompareIpc from "./compare";
import registerDirectoryIpc from "./directory";
import registerFileIpc from "./file";

export function registerIpcHandlers() {
  registerCompareIpc()
  registerDirectoryIpc()
  registerFileIpc()
}
