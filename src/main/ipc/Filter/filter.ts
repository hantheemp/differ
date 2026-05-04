import { ipcMain } from 'electron'
import { loadFiltersFromFile, saveFiltersToFile } from '../../services/filter/filter'
import { FilterRule } from './type'

export default function registerFilterIpc() {
  ipcMain.handle('loadFilters', async () => {
    return await loadFiltersFromFile()
  })
  ipcMain.handle('saveFilters', async (_, filters: FilterRule[]) => {
    await saveFiltersToFile(filters)
  })
}
