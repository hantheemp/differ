import { registerDirectoryIpc } from './directory'
import { registerFileIpc } from './file'
import { registerIgnoreIpc } from './ignore'

export function registerIpcHandlers() {
  registerDirectoryIpc()
  registerFileIpc()
  registerIgnoreIpc()
}
