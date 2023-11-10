import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TerrainState {
  grid: ("grass" | "water" | "rock" | "house")[]
  credit: number
  selectedItem: "water" | "rock" | "house" | null
  actionHistory: Array<{
    grid: ("grass" | "water" | "rock" | "house")[]
    credit: number
    description: string
  }>
  currentHistoryIndex: number
}

const initialState: TerrainState = {
  grid: new Array(100).fill("grass"),
  credit: 1000,
  selectedItem: null,
  actionHistory: [],
  currentHistoryIndex: -1,
}

export const setGridAndCreditFromHistory = createAsyncThunk(
  "terrain/setGridAndCreditFromHistory",
  async (historyEntry: {
    grid: ("grass" | "water" | "rock" | "house")[]
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
      action: PayloadAction<"water" | "rock" | "house" | null>,
    ) => {
      state.selectedItem = action.payload
    },
    placeItem: (
      state,
      action: PayloadAction<{
        index: number
        item: "water" | "rock" | "house"
      }>,
    ) => {
      const { index, item } = action.payload

      if (state.grid[index] === "grass") {
        const cost = item === "house" ? 10 : 3
        if (state.credit >= cost) {
          state.grid[index] = item
          state.credit -= cost
        }
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const index = action.payload
      const item = state.grid[index]
      if (item === "house") {
        state.credit += 5
      } else if (item === "rock") {
        state.credit += 3
      }
      state.grid[index] = "grass"
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
        grid: ("grass" | "water" | "rock" | "house")[]
        credit: number
        description: string
      }>,
    ) => {
      const { grid, credit } = action.payload
      state.grid = grid
      state.credit = credit
    },
  },
})

export const {
  setSelectedItem,
  placeItem,
  removeItem,
  pushToHistory,
  undoAction,
  redoAction,
} = terrainSlice.actions

export default terrainSlice.reducer
