import { createAsyncThunk } from "@reduxjs/toolkit"
import { TerrainType } from "../../../common/types/interfaces"

export interface HistoryEntry {
  grid: TerrainType[]
  credit: number
  description: string
}

export const setGridAndCreditFromHistory = createAsyncThunk(
  "terrain/setGridAndCreditFromHistory",
  async (historyEntry: HistoryEntry) => {
    return historyEntry
  },
)