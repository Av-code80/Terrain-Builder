import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TerrainState {
  grid: ("grass" | "water" | "rock" | "house")[]
  credit: number
  selectedItem: "water" | "rock" | "house" | null
}

const initialState: TerrainState = {
  grid: new Array(100).fill("grass"),
  credit: 1000,
  selectedItem: null,
}

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
  },
})

export const { setSelectedItem, placeItem, removeItem } = terrainSlice.actions

export default terrainSlice.reducer
