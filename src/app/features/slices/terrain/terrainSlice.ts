import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TileType } from "../../../../interfaces/enum"
import { toast } from "react-toastify"

interface TerrainState {
  grid: ("Grass" | "Water" | "Rock" | "House")[]
  credit: number
  selectedItem: "Water" | "Rock" | "House" | null
  actionHistory: Array<{
    grid: ("Grass" | "Water" | "Rock" | "House")[]
    credit: number
    description: string
  }>
  currentHistoryIndex: number
  selectedTile: {
    index: number
    type: "Grass" | "Water" | "Rock" | "House"
    action: string
    creditChange: number
  } | null
  error: string | null
}

const initialState: TerrainState = {
  grid: new Array(100).fill("Grass"),
  credit: 100,
  selectedItem: null,
  actionHistory: [],
  currentHistoryIndex: -1,
  selectedTile: null,
  error: null,
}

export const setGridAndCreditFromHistory = createAsyncThunk(
  "terrain/setGridAndCreditFromHistory",
  async (historyEntry: {
    grid: ("Grass" | "Water" | "Rock" | "House")[]
    credit: number
    description: string
  }) => {
    return historyEntry
  },
)

export const terrainSlice = createSlice({
  name: "terrain",
  initialState,
  reducers: {
    initializeGrid: (state) => {
      state.grid = state.grid.map(() =>
        Math.random() < 0.1 ? TileType.Rock : TileType.Grass,
      )
    },
    setSelectedItem: (
      state: { selectedItem: string | null },
      action: PayloadAction<"Water" | "Rock" | "House" | null>,
    ) => {
      state.selectedItem = action.payload
    },

    setSelectedTile: (
      state,
      action: PayloadAction<{
        index: number
        type: "Grass" | "Water" | "Rock" | "House"
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
        item: "Grass" | "Water" | "Rock" | "House"
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

      if (
        item === "Water" ||
        (state.grid[index] === "Water" && state.credit <= 3)
      ) {
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
    setGridAndCreditFromHistory: (
      state,
      action: PayloadAction<{
        grid: ("Grass" | "Water" | "Rock" | "House")[]
        credit: number
        description: string
      }>,
    ) => {
      const { grid, credit } = action.payload
      state.grid = grid
      state.credit = credit
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
  },
})

export const {
  initializeGrid,
  setSelectedItem,
  setSelectedTile,
  placeItem,
  removeItem,
  pushToHistory,
  undoAction,
  redoAction,
} = terrainSlice.actions

export default terrainSlice.reducer
