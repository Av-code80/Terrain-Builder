import { createAsyncThunk } from "@reduxjs/toolkit"
import { TerrainType } from "../types/interfaces"

export interface HistoryEntry {
  grid: TerrainType[]
  credit: number
  description: string
}

export const setGridAndCreditFromHistory = createAsyncThunk(
  "grid/setGridAndCreditFromHistory",
  async (historyEntry: HistoryEntry) => {
    return historyEntry
  },
)
