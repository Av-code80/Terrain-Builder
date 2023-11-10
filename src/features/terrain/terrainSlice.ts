import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TerrainState {
  [x: string]: any
  grid: ("grass" | "water" | "rock" | "house")[]
  credit: number
  loading: boolean
  error: string | null
}

const initialState: TerrainState = {
  grid: new Array(100).fill("grass"),
  credit: 1000,
  loading: false,
  error: null,
}

export const terrainSlice = createSlice({
  name: "terrain",
  initialState,
  reducers: {
    placeItem: (
      state,
      action: PayloadAction<{
        index: number
        item: "water" | "rock" | "house"
      }>,
    ) => {
      const { index, item } = action.payload
      if (state.grid[index] === "grass") state.grid[index] = item

      if (item === "house") {
        state.credit -= 10
      } else {
        state.credit -= 3
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const index = action.payload
      if (state.grid[index] === "house") state.credit += 5

      if (state.grid[index] === "rock") state.credit += 3
      state.grid[index] = "grass"
    },
  },
})
 

    export const { placeItem, removeItem } = terrainSlice.actions


 