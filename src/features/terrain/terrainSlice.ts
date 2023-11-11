import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

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
}

const initialState: TerrainState = {
  grid: new Array(100).fill("Grass"),
  credit: 100,
  selectedItem: null,
  actionHistory: [],
  currentHistoryIndex: -1,
  selectedTile: null,
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
    setSelectedItem: (
      state: { selectedItem: string | null },
      action: PayloadAction<"Water" | "Rock" | "House" | null>,
    ) => {
      state.selectedItem = action.payload
    },
    placeItem: (
      state,
      action: PayloadAction<{
        index: number
        item: "Grass" | "Water" | "Rock" | "House"
      }>,
    ) => {
      const { index, item } = action.payload

      if (state.grid[index] === "Grass") {
        const cost = item === "House" ? 10 : 3
        if (state.credit >= cost) {
          state.grid[index] = item
          state.credit -= cost
        }
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const index = action.payload
      const item = state.grid[index]
      if (item === "House") {
        state.credit += 5
      } else if (item === "Rock") {
        state.credit += 3
      }
      state.grid[index] = "Grass"
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
        description: action.payload, // Add a descriptive string of the action
      }
      state.actionHistory.push(historyEntry)
      state.currentHistoryIndex++
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
  },
})

export const {
  setSelectedItem,
  setSelectedTile,
  placeItem,
  removeItem,
  pushToHistory,
  undoAction,
  redoAction,
} = terrainSlice.actions

export default terrainSlice.reducer
