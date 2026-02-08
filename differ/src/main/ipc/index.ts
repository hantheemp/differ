import { registerDirectoryIpc } from './directory'
import { registerFileIpc } from './file'

export function registerIpcHandlers() {
  registerDirectoryIpc()
  registerFileIpc()
}
