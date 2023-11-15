import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { HistoryEntry, TerrainState, TerrainType } from "../../../common/types/interfaces"
import { TileType } from "../../../common/types"

/**
 * @Redux slice for managing the state of the grid.
 * Includes functionalities such as initializing the grid, placing and removing items,undoing and redoing actions, and managing selected items and tiles.
 *
 * @slice gridSlice
 * @state TerrainState
 */


const initialState: TerrainState = {
  grid: new Array(100).fill("Grass"),
  credit: 100,
  selectedItem: null,
  actionHistory: [],
  currentHistoryIndex: -1,
  selectedTile: null,
  error: null,
}

export const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    initializeGrid: (state) => {
      state.grid = state.grid.map(() =>
        Math.random() < 0.1 ? TileType.Rock : TileType.Grass,
      )
    },

    setSelectedItem: (
      state: { selectedItem: string | null },
      action: PayloadAction<TerrainType | null>,
    ) => {
      state.selectedItem = action.payload
    },

    setSelectedTile: (
      state,
      action: PayloadAction<{
        index: number
        type: TerrainType
        action: string
        creditChange: number
      }>,
    ) => {
      state.selectedTile = action.payload
    },

    placeItem: (
      state,
      action: PayloadAction<{
        index: number
        item: TerrainType
      }>,
    ) => {
      const { index, item } = action.payload
      const cost = item === "House" ? 10 : 3

      if (state.grid[index] === "Grass" && state.credit >= cost) {
        state.grid[index] = item
        state.credit -= cost
      } else {
        toast.error("Not enough budget to place the block.")
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const index = action.payload
      const item = state.grid[index]

      if (item === "Water" && state.credit <= 3) {
        toast.error('Cannot remove "Water" block & Not enough budget.')
        return
      }

      if (item === "House") {
        state.credit += 5
        state.grid[index] = "Grass"
      } else if (item === "Rock" && state.credit >= 3) {
        state.credit -= 3

        state.grid[index] = "Grass"
      } else {
        toast.error("Not enough budget or action not allowed.")
      }
    },

    undoAction: (state) => {
      if (state.currentHistoryIndex > 0) {
        const previousState = state.actionHistory[state.currentHistoryIndex - 1]
        state.grid = previousState.grid
        state.credit = previousState.credit
        state.currentHistoryIndex--
      }
    },

    redoAction: (state) => {
      if (state.currentHistoryIndex < state.actionHistory.length - 1) {
        const nextState = state.actionHistory[state.currentHistoryIndex + 1]
        state.grid = nextState.grid
        state.credit = nextState.credit
        state.currentHistoryIndex++
      }
    },

    pushToHistory: (state, action: PayloadAction<string>) => {
      if (state.currentHistoryIndex !== state.actionHistory.length - 1) {
        state.actionHistory = state.actionHistory.slice(
          0,
          state.currentHistoryIndex + 1,
        )
      }
      const historyEntry = {
        grid: [...state.grid],
        credit: state.credit,
        description: action.payload,
      }
      state.actionHistory.push(historyEntry)
      state.currentHistoryIndex++
    },
    
    setGridAndCreditFromHistory: (
      state,
      action: PayloadAction<HistoryEntry>,
    ) => {
      const { grid, credit } = action.payload
      state.grid = grid
      state.credit = credit
    },
  },
})

export const {
  initializeGrid,
  setSelectedItem,
  setSelectedTile,
  placeItem,
  removeItem,
  pushToHistory,
  redoAction,
  undoAction,
} = gridSlice.actions

export default gridSlice.reducer
